import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUser = (payload) => api.post('/user', payload)
export const getAllUser = () => api.get('/user')
export const getUserByID = (id) => api.get(`/user/${id}`)
export const chechUser = (payload) => api.post('/login', payload)
export const addGame = (payload) => api.post('/game', payload)

export const addToLeaderboard = (payload) => api.post('/leader', payload)
export const getAll = (payload) => api.post('/getall', payload)
 export const changePass = (payload) => api.post('/changePassword', payload)
const apis = {
    insertUser,
    getAllUser,
    getUserByID,
    chechUser,
    addGame,addToLeaderboard,
	getAll,
    changePass
}

export default apis
