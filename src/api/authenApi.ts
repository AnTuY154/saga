// A mock function to mimic making an async request for data
const axios = require('axios');




const authenAPI = {
    login: (userInfo: any) => {
        return axios({
            method: 'POST',
            url: `http://localhost:4000/v1/auth/login`,
            headers: {
                'content-type': 'application/json',
            },
            data: userInfo
        });
    }
}


export default authenAPI;





