import React from 'react';
import File from './file/File'
import './fileList.scss'

const FileList = () => {
    return (
        <div className={'file-list'}>
            {/*<div className="file-list-info">*/}
            {/*    <div className="file-info-name">Name</div>*/}
            {/*    <div className="file-list-info-creation">*/}
            {/*        <div className="file-infi-date">Date</div>*/}
            {/*        <div className="file-info-size">Size</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
           <File/>
           <File/>
           <File/>
           <File/>
        </div>
    );
};

export default FileList;