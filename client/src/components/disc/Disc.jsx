import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles, createDir} from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import {setPopupDisplay, setCurrentDir} from '../../reducers/fileReducer'
import './disc.scss'

const Disc = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const files = useSelector(state => state.files.files)
    const dirStack = useSelector(state => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    const popupHandler = () => {
        dispatch(setPopupDisplay('flex'))
    }
    const backClickHandler = () => {
        const backDir = dirStack.pop()
        dispatch(setCurrentDir(backDir))
    }

    return (
        <div className={'disc-page'}>
            <div className={"disc-nav"}>
                <button className={"disc-btn"} onClick={() => {
                    backClickHandler()
                }}>{'<'}</button>
                <button className="disc-btn" onClick={() => popupHandler()}>Create</button>
            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};

export default Disc;