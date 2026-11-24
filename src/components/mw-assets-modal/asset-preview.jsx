import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {
    Download,
    File,
    FileQuestion,
    MousePointerClick,
    Pencil,
    Trash2
} from 'lucide-react';
import {formatBytes} from '../../lib/utils/bytes';
import styles from './assets-modal.css';

const AssetPreview = props => {
    const {preview} = props;

    if (!preview) {
        return (
            <div className={styles.preview}>
                <div className={styles.previewNone}>
                    <MousePointerClick size={28} />
                    <FormattedMessage
                        defaultMessage="Select a file to preview it"
                        description="Shown when no custom asset is selected"
                        id="mw.assets.noSelection"
                    />
                </div>
            </div>
        );
    }

    if (preview.multiple) {
        return (
            <div className={styles.preview}>
                <div className={styles.previewHeader}>
                    <span className={styles.previewTitle}>
                        <FormattedMessage
                            defaultMessage="{count} items selected"
                            description="Preview header when several custom assets are selected"
                            id="mw.assets.multiSelection"
                            values={{count: preview.count}}
                        />
                    </span>
                    <span className={styles.previewSubtitle}>
                        {formatBytes(preview.totalSize)}
                    </span>
                </div>

                <div className={styles.multiList}>
                    {preview.items.map((item, index) => (
                        <div
                            key={`${item.name}:${index}`}
                            className={styles.multiItem}
                            title={item.name}
                        >
                            <File
                                className={styles.multiIcon}
                                size={15}
                            />
                            <span className={styles.multiName}>{item.name}</span>
                            <span className={styles.multiMeta}>{formatBytes(item.size)}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.previewButtons}>
                    <button
                        type="button"
                        className={styles.previewButton}
                        onClick={props.onExport}
                    >
                        <Download size={15} />
                        <FormattedMessage
                            defaultMessage="Export"
                            description="Button to download custom assets"
                            id="mw.assets.exportPreview"
                        />
                    </button>
                    <button
                        type="button"
                        className={`${styles.previewButton} ${styles.previewButtonDanger}`}
                        onClick={props.onDelete}
                    >
                        <Trash2 size={15} />
                        <FormattedMessage
                            defaultMessage="Delete"
                            description="Button to delete custom assets"
                            id="mw.assets.deletePreview"
                        />
                    </button>
                </div>
            </div>
        );
    }

    const renderMedia = () => {
        if (preview.kind === 'image') {
            return (
                <img
                    className={styles.previewImage}
                    src={preview.url}
                    alt={preview.name}
                />
            );
        }
        if (preview.kind === 'audio') {
            return (
                <audio
                    className={styles.previewAudio}
                    src={preview.url}
                    controls
                />
            );
        }
        if (preview.kind === 'text') {
            return (
                <pre className={styles.previewText}>{preview.text}</pre>
            );
        }
        return (
            <div className={styles.previewNone}>
                <FileQuestion size={28} />
                <FormattedMessage
                    defaultMessage="No preview available"
                    description="Shown when a custom asset cannot be previewed"
                    id="mw.assets.noPreview"
                />
            </div>
        );
    };

    return (
        <div className={styles.preview}>
            <div className={styles.previewHeader}>
                <span
                    className={styles.previewTitle}
                    title={preview.name}
                >
                    {preview.name.substring(preview.name.lastIndexOf('/') + 1)}
                </span>
                <span className={styles.previewBadge}>{preview.dataFormat.toUpperCase()}</span>
            </div>

            <div className={styles.previewBody}>
                <div className={styles.previewMedia}>
                    {renderMedia()}
                </div>

                <dl className={styles.metadata}>
                    <dt>
                        <FormattedMessage
                            defaultMessage="Path"
                            description="Metadata label for a custom asset's full path"
                            id="mw.assets.metaPath"
                        />
                    </dt>
                    <dd
                        className={styles.metadataPath}
                        title={preview.name}
                    >
                        {`/${preview.name}`}
                    </dd>

                    <dt>
                        <FormattedMessage
                            defaultMessage="Format"
                            description="Metadata label for a custom asset's file format"
                            id="mw.assets.metaFormat"
                        />
                    </dt>
                    <dd>{preview.dataFormat}</dd>

                    <dt>
                        <FormattedMessage
                            defaultMessage="Size"
                            description="Metadata label for a custom asset's size"
                            id="mw.assets.metaSize"
                        />
                    </dt>
                    <dd>{formatBytes(preview.size)}</dd>

                    <dt>
                        <FormattedMessage
                            defaultMessage="MD5 Checksum"
                            description="Metadata label for a custom asset's md5 checksum"
                            id="mw.assets.metaChecksum"
                        />
                    </dt>
                    <dd
                        className={styles.metadataPath}
                        title={preview.md5}
                    >
                        {preview.md5}
                    </dd>
                </dl>
            </div>

            <div className={styles.previewButtons}>
                <button
                    type="button"
                    className={styles.previewButton}
                    onClick={props.onRename}
                >
                    <Pencil size={15} />
                    <FormattedMessage
                        defaultMessage="Rename"
                        description="Button to rename a custom asset"
                        id="mw.assets.renameButton"
                    />
                </button>
                <button
                    type="button"
                    className={styles.previewButton}
                    onClick={props.onExport}
                >
                    <Download size={15} />
                    <FormattedMessage
                        defaultMessage="Export"
                        description="Button to download custom assets"
                        id="mw.assets.exportPreview"
                    />
                </button>
                <button
                    type="button"
                    className={`${styles.previewButton} ${styles.previewButtonDanger}`}
                    onClick={props.onDelete}
                >
                    <Trash2 size={15} />
                    <FormattedMessage
                        defaultMessage="Delete"
                        description="Button to delete custom assets"
                        id="mw.assets.deletePreview"
                    />
                </button>
            </div>
        </div>
    );
};

AssetPreview.propTypes = {
    preview: PropTypes.shape({
        multiple: PropTypes.bool,
        count: PropTypes.number,
        totalSize: PropTypes.number,
        items: PropTypes.array,
        index: PropTypes.number,
        name: PropTypes.string,
        dataFormat: PropTypes.string,
        size: PropTypes.number,
        md5: PropTypes.string,
        kind: PropTypes.oneOf(['image', 'audio', 'text', 'none']),
        url: PropTypes.string,
        text: PropTypes.string
    }),
    onRename: PropTypes.func.isRequired,
    onExport: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default AssetPreview;
