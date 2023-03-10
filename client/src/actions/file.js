import axios from 'axios'
// import {setUser} from '../reducers/userReducer'

export const getFiles = (dirId) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`, {
                headers: {Authorization: `Bearer: ${localStorage.getItem('token')}`}
            })
            console.log(response.data)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
// export const login = (email, password) => {
//     return async dispatch => {
//         try {
//             const response = await axios.post(`http://localhost:5000/api/auth/login/`, {
//                 email,
//                 password
//             })
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e) {
//             console.log(e.response.data.message)
//         }
//     }
// }
// export const auth = (email, password) => {
//     return async dispatch => {
//         try {
//             const response = await axios.get(`http://localhost:5000/api/auth/auth/`,
//                 {headers: {Authorization: `Bearer: ${localStorage.getItem('token')}`}}
//             )
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e) {
//             console.log(e.response.data.message)
//             localStorage.removeItem('token')
//         }
//     }

// }