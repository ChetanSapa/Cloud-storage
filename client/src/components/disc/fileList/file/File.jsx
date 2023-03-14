import React from 'react';
import './file.scss'
import folderImg from '../../../../assets/folder.png'
import fileImg from '../../../../assets/file.png'

const File = ({file}) => {
    return (
        <div className={'file'}>
            <div className="file-title">
                <img src={file.type === 'dir'? folderImg : fileImg} alt={file.name}/>
                <div className="file-title-name">{file.name}</div>
            </div>
            <div className="file-info">
                <div className="file-info-date">{file.date.slice(0,10)}</div>
                <div className="file-info-size">{file.size}</div>
            </div>
        </div>
    );
};

export default File;