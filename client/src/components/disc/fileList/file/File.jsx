import React from 'react';
import './file.scss'
import folderImg from '../../../../assets/folder.png'
import fileImg from '../../../../assets/file.png'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentDir, pushToStack} from '../../../../reducers/fileReducer'

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    }

    return (
        <div className={'file'}>
            <div className="file-title">
                <img src={file.type === 'dir' ? folderImg : fileImg} alt={file.name}/>
                <div className="file-title-name"
                     onClick={file.type === 'dir' ? () => openDirHandler() : ''}>{file.name}</div>
            </div>
            <div className="file-info">
                <div className="file-info-date">{file.date.slice(0, 10)}</div>
                <div className="file-info-size">{file.size} bit</div>
            </div>
        </div>
    );
};

export default File;