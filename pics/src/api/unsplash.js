import Axios from 'axios';


export default Axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7pJz3XKLoDdVRJacuxOX7TPLnXW5V8JamRcXx9bZy6o'
    }
})

