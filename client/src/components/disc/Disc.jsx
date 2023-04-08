import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles, uploadFile} from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import Uploader from './uploader/Uploader'
import {setCurrentDir, setPopupDisplay} from '../../reducers/fileReducer'
import '../../styles/disc.scss'
import '../../styles/loader.scss'

const Disc = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

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

    const drugEnterHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }
    const drugLeaveHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }
    const dropHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }
    if (loader) {
        return (
            <div className={'loader'}>
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
    return (
        <div className={'disc-page'}
             onDragEnter={drugEnterHandler}
             onDragLeave={drugLeaveHandler}
             onDragOver={drugEnterHandler}>
            <div className={"disc-nav"}>
                <button className={"disc-btn-back"} onClick={() => {
                    backClickHandler()
                }}>{'<'}</button>
                <button className="disc-btn-create" onClick={() => popupHandler()}>Create</button>
                <div className={'disc-btn-upload'}>
                    <label htmlFor="uploadFile">Upload file</label>
                    <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file"
                           id={'uploadFile'}/>
                </div>
                <div className="disc-select">
                    <span>Sort by:</span>
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="type">name</option>
                        <option value="name">type</option>
                        <option value="date">date</option>
                    </select>
                </div>
            </div>
            {!dragEnter ?
                <FileList/>
                :
                <div className={'drop-area'}
                     onDrop={dropHandler}
                     onDragEnter={drugEnterHandler}
                     onDragLeave={drugLeaveHandler}
                     onDragOver={drugEnterHandler}>
                    Drop file here
                </div>
            }

            <Popup/>
            <Uploader/>
        </div>

    );
};

export default Disc;