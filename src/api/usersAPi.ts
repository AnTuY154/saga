// A mock function to mimic making an async request for data
const axios = require('axios');


const questionApi = {
    getQuestions: (page: string, limit: string) => {
        return axios({
            method: 'GET',
            url: `http://localhost:4000/v1/questions/${page}/${limit}`,
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}


export default questionApi;





