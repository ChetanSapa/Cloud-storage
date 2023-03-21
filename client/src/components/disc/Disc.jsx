import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles, uploadFile} from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import {setCurrentDir, setPopupDisplay} from '../../reducers/fileReducer'
import './disc.scss'

const Disc = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
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
    const fileUploadHandler = (event) => {
        const files = [...event.target.files]
        console.log(files)
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    return (
        <div className={'disc-page'}>
            <div className={"disc-nav"}>
                <button className={"disc-btn"} onClick={() => {
                    backClickHandler()
                }}>{'<'}</button>
                <button className="disc-btn" onClick={() => popupHandler()}>Create</button>
                <div className={'disc-btn'}>
                    <label htmlFor="uploadFile">Upload file</label>
                    <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id={'uploadFile'}/>
                </div>
            </div>
            <FileList/>
            <Popup/>
        </div>
    );
};

export default Disc;