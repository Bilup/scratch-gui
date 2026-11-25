import PropTypes from 'prop-types';
import React from 'react';
import {FileCode, FileQuestion, Image, Music, Type} from 'lucide-react';

import styles from './project-assets-manager.css';

const ICONS_BY_TYPE = {
    image: Image,
    audio: Music,
    font: Type,
    code: FileCode
};

const FileTypeIcon = ({fileType, size}) => {
    const Icon = ICONS_BY_TYPE[fileType] || FileQuestion;
    return (<Icon
        className={styles.fileIcon}
        size={size}
    />);
};

FileTypeIcon.propTypes = {
    fileType: PropTypes.string,
    size: PropTypes.number
};

FileTypeIcon.defaultProps = {
    fileType: '',
    size: 16
};

export default FileTypeIcon;
