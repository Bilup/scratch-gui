import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import overrideDefaultProject from '!arraybuffer-loader!./override-default-project.sb3';
import backdrop from '!raw-loader!./223d25c297317463755043f276178aef.svg';
/* eslint-enable import/no-unresolved */
import {TextEncoder} from '../tw-text-encoder';
import tips from './tips.json';

function genTip(str) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    return str.replace(/\$\{TIP\}/g, randomTip);
}

const defaultProject = translator => {
    if (overrideDefaultProject.byteLength > 0) {
        return [{
            id: 0,
            assetType: 'Project',
            dataFormat: 'JSON',
            data: overrideDefaultProject
        }];
    }

    let _TextEncoder;
    if (typeof TextEncoder === 'undefined') {
        _TextEncoder = require('text-encoding').TextEncoder;
    } else {
        _TextEncoder = TextEncoder;
    }
    const encoder = new _TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '223d25c297317463755043f276178aef',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(genTip(backdrop))
    }];
};

export default defaultProject;
