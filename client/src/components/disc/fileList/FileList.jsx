import React from 'react';
import File from './file/File'
import './fileList.scss'
import {useSelector} from 'react-redux'

const FileList = () => {

    const files = useSelector(state => state.files.files)
    console.log(files)

    return (
        <div className={'file-list'}>
            {files.map(file => <File key={file._id} file={file}/>)}
        </div>
    );
};

export default FileList;