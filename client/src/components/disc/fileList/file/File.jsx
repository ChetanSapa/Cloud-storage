import React from 'react';
import './file.scss'
import folderImg from '../../../../assets/folder.png'
import fileImg from '../../../../assets/file.png'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentDir, pushToStack} from '../../../../reducers/fileReducer'

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const openDirHandler = (file) => {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    return (
        <div className={'file'}>
            <div className="file-title">
                <img src={file.type === 'dir' ? folderImg : fileImg} alt={file.name}/>
                <div className={file.type === 'dir' ? 'file-title-name-dir': 'file-title-name-file'} onClick={() => openDirHandler(file)}>{file.name}</div>
            </div>
            <div className="file-info">
                <div className="file-info-date">{file.date.slice(0, 10)}</div>
                <div className="file-info-size">{Math.floor(file.size/1000)} KB</div>
            </div>
        </div>
    );
};

export default File;