import React from 'react';
import File from './file/File'
import '../../../styles/fileList.scss'
import '../../../styles/app.scss'
import {useSelector} from 'react-redux'

const FileList = () => {

    const files = useSelector(state => state.files.files)
    console.log(files)

    if (files.length === 0){
        return (
            <div className={'loader'}>The folder is empty</div>
        )
    }

    return (
        <div className={'file-list'}>
            {files.map(file => <File key={file._id} file={file}/>)}
        </div>
    );
};

export default FileList;