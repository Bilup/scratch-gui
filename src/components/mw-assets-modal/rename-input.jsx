import React from 'react';
import PropTypes from 'prop-types';
import bindAll from 'lodash.bindall';
import styles from './assets-modal.css';

class RenameInput extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'setInput',
            'handleChange',
            'handleKeyDown',
            'handleBlur',
            'handleClick',
            'commit',
            'cancel'
        ]);
        this.finished = false;
        this.state = {value: props.initial};
    }

    componentDidMount () {
        if (this.input) {
            this.input.focus();
            this.input.select();
        }
    }

    setInput (input) {
        this.input = input;
    }

    handleChange (e) {
        this.setState({value: e.target.value});
    }

    handleKeyDown (e) {
        e.stopPropagation();
        if (e.key === 'Enter') {
            e.preventDefault();
            this.commit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            this.cancel();
        }
    }

    handleBlur () {
        this.commit();
    }

    handleClick (e) {
        e.stopPropagation();
    }

    commit () {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.props.onCommit(this.state.value);
    }

    cancel () {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.props.onCancel();
    }

    render () {
        return (
            <input
                ref={this.setInput}
                className={styles.renameInput}
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
            />
        );
    }
}

RenameInput.propTypes = {
    initial: PropTypes.string,
    placeholder: PropTypes.string,
    onCommit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

RenameInput.defaultProps = {
    initial: '',
    placeholder: ''
};

export default RenameInput;
