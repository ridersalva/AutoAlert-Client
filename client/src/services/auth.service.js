import axios from 'axios'

class AuthService {


    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/auth` })
    }

    credentials(credentials) {
        return this.api.post('/credentials', credentials)
    }


    verify(token) {
        return this.api.get('/verification', { headers: { Authorization: `Bearer ${token}` } })
    }

}

const authService = new AuthService()

export default authService