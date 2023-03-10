import React from 'react';
import './file.scss'
import folder from '../../../../assets/folder.png'

const File = () => {
    return (
        <div className={'file'}>
            <div className="file-title">
                <img src={folder} alt=""/>
                <div className="file-title-name">Folder</div>
            </div>
            <div className="file-info">
                <div className="file-info-date">10.03.20023</div>
                <div className="file-info-size">0 bit</div>
            </div>
        </div>
    );
};

export default File;