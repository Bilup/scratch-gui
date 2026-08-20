import bindAll from 'lodash.bindall';
import defaultsDeep from 'lodash.defaultsdeep';
import PropTypes from 'prop-types';
import React from 'react';
import CustomProceduresComponent from '../components/custom-procedures/custom-procedures.jsx';
import LazyScratchBlocks from '../lib/tw-lazy-scratch-blocks';
import {connect} from 'react-redux';

const DEFAULT_COLOR = '#FF6680';

class CustomProcedures extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleAddLabel',
            'handleAddBoolean',
            'handleAddTextNumber',
            'handleToggleWarp',
            'handleToggleGlobal',
            'handleColorChange',
            'handleCancel',
            'handleKeyDown',
            'handleOk',
            'recenterBlock',
            'setBlocks'
        ]);
        this.state = {
            rtlOffset: 0,
            warp: false,
            global: false,
            color: DEFAULT_COLOR,
            emptyName: false,
            duplicateName: false
        };
    }
    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown);
        if (this.workspace) {
            this.workspace.dispose();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    handleKeyDown (event) {
        const tag = event.target.tagName;
        const inTextField = tag === 'INPUT' || tag === 'TEXTAREA';
        if (event.key === 'Escape' && !inTextField) {
            this.handleCancel();
        } else if (event.key === 'Enter' && !inTextField && tag !== 'BUTTON') {
            this.handleOk();
        }
    }
    setBlocks (blocksRef) {
        if (!blocksRef) return;
        if (this.workspace) return;

        this.blocks = blocksRef;
        const workspaceConfig = defaultsDeep({},
            CustomProcedures.defaultOptions,
            this.props.options,
            {rtl: this.props.isRtl}
        );

        const ScratchBlocks = LazyScratchBlocks.get();
        const oldDefaultToolbox = ScratchBlocks.Blocks.defaultToolbox;
        ScratchBlocks.Blocks.defaultToolbox = null;
        this.workspace = ScratchBlocks.inject(this.blocks, workspaceConfig);
        ScratchBlocks.Blocks.defaultToolbox = oldDefaultToolbox;

        this.mutationRoot = this.workspace.newBlock('procedures_declaration');
        this.mutationRoot.setMovable(false);
        this.mutationRoot.setDeletable(false);
        this.mutationRoot.contextMenu = false;

        this.workspace.addChangeListener(() => {
            if (!this.workspace || !this.mutationRoot || !this.mutationRoot.workspace) return;
            this.mutationRoot.onChangeFn();
            // 名字一旦被用户修改，重置上一次的重名拦截，允许重新提交
            if (this.state.duplicateName) {
                this.setState({duplicateName: false});
            }
            const emptyName = !(this.mutationRoot.procCode_ || '').trim();
            if (emptyName !== this.state.emptyName) {
                this.setState({emptyName});
            }
            this.recenterBlock();
        });
        this.mutationRoot.domToMutation(this.props.mutator);
        this.mutationRoot.initSvg();
        this.mutationRoot.render();

        if (typeof this.mutationRoot.getWarp === 'function') {
            this.setState({warp: this.mutationRoot.getWarp()});
        }
        if (typeof this.mutationRoot.getGlobal === 'function') {
            this.setState({global: this.mutationRoot.getGlobal()});
        }
        const customColor = typeof this.mutationRoot.getCustomColor === 'function' &&
            this.mutationRoot.getCustomColor();
        if (customColor) {
            this.setState({color: customColor});
        }

        setTimeout(() => {
            if (this.mutationRoot && this.mutationRoot.workspace) {
                this.mutationRoot.focusLastEditor_();
            }
        });

        if (window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(() => {
                if (!this.workspace) return;
                this.workspace.resize();
                this.recenterBlock();
            });
            this.resizeObserver.observe(this.blocks);
        }
    }
    recenterBlock () {
        if (!this.workspace || !this.mutationRoot || !this.mutationRoot.workspace) return;
        const metrics = this.workspace.getMetrics();
        const {x, y} = this.mutationRoot.getRelativeToSurfaceXY();
        const dy = (metrics.viewHeight / 2) - (this.mutationRoot.height / 2) - y;
        let dx;
        if (this.props.isRtl) {
            const ltrX = ((metrics.viewWidth / 2) - (this.mutationRoot.width / 2) + 25);
            const mirrorX = x - ((x - this.state.rtlOffset) * 2);
            if (mirrorX === ltrX) {
                return;
            }
            dx = mirrorX - ltrX;
            const midPoint = metrics.viewWidth / 2;
            if (x === 0) {
                if (this.mutationRoot.width < midPoint) {
                    dx = ltrX;
                } else if (this.mutationRoot.width < metrics.viewWidth) {
                    dx = midPoint - ((metrics.viewWidth - this.mutationRoot.width) / 2);
                } else {
                    dx = midPoint + (this.mutationRoot.width - metrics.viewWidth);
                }
                this.mutationRoot.moveBy(dx, dy);
                this.setState({rtlOffset: this.mutationRoot.getRelativeToSurfaceXY().x});
                return;
            }
            if (this.mutationRoot.width > metrics.viewWidth) {
                dx = dx + this.mutationRoot.width - metrics.viewWidth;
            }
        } else {
            dx = (metrics.viewWidth / 2) - (this.mutationRoot.width / 2) - x;
            if (this.mutationRoot.width > metrics.viewWidth) {
                dx = metrics.viewWidth - this.mutationRoot.width - x;
            }
        }
        this.mutationRoot.moveBy(dx, dy);
    }
    handleCancel () {
        this.props.onRequestClose();
    }
    handleOk () {
        if (this.state.emptyName) return;
        const newMutation = this.mutationRoot ? this.mutationRoot.mutationToDom(true) : null;
        if (newMutation && this.state.global) {
            newMutation.setAttribute('global', 'true');
        }
        if (newMutation && this.state.color.toLowerCase() === DEFAULT_COLOR.toLowerCase()) {
            newMutation.removeAttribute('customcolor');
        }
        // Reject names that collide with an existing procedure: a global block
        // is visible from every target, and a regular block cannot shadow a
        // global one either. Editing the same block keeps its own name legal.
        if (newMutation && this.isNameTaken(newMutation)) {
            this.setState({duplicateName: true});
            return;
        }
        this.props.onRequestClose(newMutation);
    }
    // Whether the procedure name in the given mutation is already used by
    // another procedure in the project. Global (cross-target) procedures
    // stored in the stage are matched against every target; regular blocks
    // only collide with other blocks in the current target (Scratch's usual
    // per-target namespace) plus the global procedures.
    isNameTaken (newMutation) {
        const newProcCode = newMutation.getAttribute('proccode');
        if (!newProcCode) return false;
        const vm = this.props.vm;
        if (!vm) return false;
        // The block currently being edited keeps its own name, so that
        // re-saving without changes is not treated as a collision.
        const editingProcCode = this.props.mutator ?
            this.props.mutator.getAttribute('proccode') : null;
        const procCodeEquals = (a, b) =>
            typeof a === 'string' && typeof b === 'string' &&
            a.toLowerCase() === b.toLowerCase();

        const stage = vm.runtime.getTargetForStage();
        const editingTarget = vm.editingTarget;
        const isGlobalNew = this.state.global;

        // Collect the names that must not collide with the new procedure.
        // stage: global blocks + (when editing the stage) the stage's own blocks.
        // editingTarget: the current sprite's own regular blocks.
        const targets = [];
        if (stage) targets.push(stage);
        if (editingTarget && editingTarget !== stage) targets.push(editingTarget);
        // A new global block collides with regular blocks on *any* target,
        // since it becomes visible everywhere. A new regular block only
        // collides within its own target.
        const checkTargets = isGlobalNew ?
            vm.runtime.targets : targets;

        for (const target of checkTargets) {
            if (!target || !target.blocks || !target.blocks._blocks) continue;
            const blocks = target.blocks._blocks;
            for (const blockId in blocks) {
                if (!Object.prototype.hasOwnProperty.call(blocks, blockId)) continue;
                const block = blocks[blockId];
                if (block.opcode !== 'procedures_prototype' || !block.mutation) continue;
                const procCode = block.mutation.proccode;
                if (!procCode) continue;
                // Skip the block being edited itself.
                if (procCodeEquals(procCode, editingProcCode)) continue;
                if (!procCodeEquals(procCode, newProcCode)) continue;
                // A regular (non-global) block on a *different* sprite does not
                // collide with a new regular block (Scratch per-target rules),
                // but every global block is project-wide.
                const isGlobalExisting = block.mutation.global === true ||
                    block.mutation.global === 'true';
                if (!isGlobalNew && !isGlobalExisting && target !== editingTarget) {
                    continue;
                }
                return true;
            }
        }
        return false;
    }
    handleAddLabel () {
        if (this.mutationRoot) {
            this.mutationRoot.addLabelExternal();
        }
    }
    handleAddBoolean () {
        if (this.mutationRoot) {
            this.mutationRoot.addBooleanExternal();
        }
    }
    handleAddTextNumber () {
        if (this.mutationRoot) {
            this.mutationRoot.addStringNumberExternal();
        }
    }
    handleToggleWarp () {
        if (this.mutationRoot &&
            typeof this.mutationRoot.getWarp === 'function' &&
            typeof this.mutationRoot.setWarp === 'function') {
            const newWarp = !this.mutationRoot.getWarp();
            this.mutationRoot.setWarp(newWarp);
            this.setState({warp: newWarp});
        }
    }
    handleToggleGlobal () {
        if (this.mutationRoot &&
            typeof this.mutationRoot.getGlobal === 'function' &&
            typeof this.mutationRoot.setGlobal === 'function') {
            const newGlobal = !this.mutationRoot.getGlobal();
            this.mutationRoot.setGlobal(newGlobal);
            this.setState({global: newGlobal});
        }
    }
    handleColorChange (event) {
        const newColor = event.target.value;
        this.setState({color: newColor});
        if (this.mutationRoot && typeof this.mutationRoot.setCustomColor === 'function') {
            this.mutationRoot.setCustomColor(newColor);
        }
    }
    render () {
        return (
            <CustomProceduresComponent
                componentRef={this.setBlocks}
                emptyName={this.state.emptyName}
                global={this.state.global}
                isStage={this.props.isStage}
                warp={this.state.warp}
                color={this.state.color}
                onAddBoolean={this.handleAddBoolean}
                onAddLabel={this.handleAddLabel}
                onAddTextNumber={this.handleAddTextNumber}
                onCancel={this.handleCancel}
                onColorChange={this.handleColorChange}
                onOk={this.handleOk}
                onToggleGlobal={this.handleToggleGlobal}
                onToggleWarp={this.handleToggleWarp}
                duplicateName={this.state.duplicateName}
            />
        );
    }
}

CustomProcedures.propTypes = {
    isRtl: PropTypes.bool,
    isStage: PropTypes.bool,
    mutator: PropTypes.instanceOf(Element),
    onRequestClose: PropTypes.func.isRequired,
    options: PropTypes.shape({
        media: PropTypes.string,
        zoom: PropTypes.shape({
            controls: PropTypes.bool,
            wheel: PropTypes.bool,
            startScale: PropTypes.number
        }),
        comments: PropTypes.bool,
        collapse: PropTypes.bool
    }),
    vm: PropTypes.shape({
        runtime: PropTypes.shape({
            getTargetForStage: PropTypes.func,
            targets: PropTypes.array
        }),
        editingTarget: PropTypes.object
    }).isRequired
};

CustomProcedures.defaultOptions = {
    zoom: {
        controls: false,
        wheel: false,
        startScale: 1
    },
    grid: {
        spacing: 40,
        length: 2,
        colour: 'rgba(140, 140, 140, 0.25)',
        snap: false
    },
    comments: false,
    collapse: false,
    scrollbars: true,
    move: {
        scrollbars: true,
        drag: true,
        wheel: true
    }
};

CustomProcedures.defaultProps = {
    options: CustomProcedures.defaultOptions
};

const mapStateToProps = state => ({
    isRtl: state.locales.isRtl,
    mutator: state.scratchGui.customProcedures.mutator
});

export default connect(
    mapStateToProps
)(CustomProcedures);
