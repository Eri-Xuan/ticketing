import axios from "axios"; 

export default ({ req }) => {
    if (typeof window === 'undefined') {
        //server

        return axios.create({
            baseURL:'http://www.ticketing-trans-app-prod.store/',
            headers: req.headers
        })
    } else {
        //browser
        return axios.create({
            baseURL:'/'
        });
    }
}