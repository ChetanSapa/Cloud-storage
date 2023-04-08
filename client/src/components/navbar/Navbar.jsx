import {React, useState} from 'react';
import '../../styles/navbar.scss'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../reducers/userReducer'
import {showLoader} from '../../reducers/appReducer'
import {searchFile, getFiles} from '../../actions/file'

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.user.currentDir)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const searchChangeHandler = (e) => {
        setSearchValue(e.target.value)
        if (searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFile(value))
            }, 500, e.target.value))
        }else {
            dispatch(getFiles(currentDir))
        }
    }
    return (
        <div className={'navbar'}>
            <div className={'logo'}>
                <div className={'logo_title'}>Simple Cloud Storage</div>
            </div>
            <div className={'navbar_btn'}>
                {isAuth && <input
                    value={searchValue}
                    onChange={e => searchChangeHandler(e)}
                    type="text"
                    placeholder={'Search...'}
                />}
                {!isAuth && <NavLink to={'/login'} className={'navbar_auth'}>Login</NavLink>}
                {!isAuth && <NavLink to={'/registration'} className={'navbar_auth'}>Registration</NavLink>}
                {isAuth && <a href={''} className={'navbar_auth'} onClick={() => dispatch(logout())}>Logout</a>}
            </div>
        </div>
    );
};

export default Navbar;