import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getFiles} from '../../actions/file'
import FileList from'./fileList/FileList'
import './disc.scss'

const Disc = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(()=>{
        dispatch(getFiles(currentDir))
    },[currentDir])

    return (
        <div className={'disc-page'}>
            <div className={"disc-nav"}>
                <button className={"disc-btn"}>{'<'}</button>
                <button className="disc-btn">Create</button>
            </div>
          <FileList/>
        </div>
    );
};

export default Disc;