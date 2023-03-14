import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles, createDir} from '../../actions/file'
import FileList from './fileList/FileList'
import './disc.scss'

const Disc = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const files = useSelector(state => state.files.files)

    useEffect(() => {
        dispatch(getFiles(currentDir))
        console.log(currentDir)
        console.log(files)
    }, [currentDir])

    const createDirHandler = () => {
        dispatch(createDir(currentDir, 'Main dirrectory'))
    }

    return (
        <div className={'disc-page'}>
            <div className={"disc-nav"}>
                <button className={"disc-btn"}>{'<'}</button>
                <button className="disc-btn" onClick={() => createDirHandler()}>Create</button>
            </div>
            <FileList/>
        </div>
    );
};

export default Disc;