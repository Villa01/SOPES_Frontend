const axios = require('axios').default;

const url = 'https://rustapi-ed4ufx3ofq-uc.a.run.app/api/get_logs'
// const url = 'http://localhost:8080/api/get_all'

const getAllLogs = async () => {
    try {

        const data = axios.get(url)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
                return [];
            });
        return data;
    } catch (error) {
        console.error(error)
        return [];
    }
}

export {
    getAllLogs
}