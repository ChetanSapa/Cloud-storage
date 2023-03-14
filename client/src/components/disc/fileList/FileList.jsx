import React from 'react';
import File from './file/File'
import './fileList.scss'
import {useSelector} from 'react-redux'

const FileList = () => {

    const files = useSelector(state => state.files.files)
    console.log(files)

    return (
        <div className={'file-list'}>
            {/*<div className="file-list-info">*/}
            {/*    <div className="file-info-name">Name</div>*/}
            {/*    <div className="file-list-info-creation">*/}
            {/*        <div className="file-infi-date">Date</div>*/}
            {/*        <div className="file-info-size">Size</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {files.map(file => <File key={file.id} file={file}/>)}
        </div>
    );
};

export default FileList;