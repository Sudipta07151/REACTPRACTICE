import Axios from 'axios';


export default Axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Xgye32ZHDF2xf3z7ECGR5hSXhgabMEyw_OetZK9pZL8'
    }
})

