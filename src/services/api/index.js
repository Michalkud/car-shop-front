import axios from 'axios';

class API {



    fetchContacts() {

        const requester = axios.create({
            baseURL: 'http://localhost:3000/',
            timeout: 1000
          });

        return new Promise((resolve, reject) => {
            requester.get('/contacts')
            .then(function (response) {

              resolve(response.data);
            })
            .catch(function (error) {
            });
          
        });
    }

    editContact(data) {

        const requester = axios.create({
            baseURL: 'http://localhost:3000/',
            timeout: 1000
        });

        return new Promise((resolve, reject) => {

            requester.put('/contacts/' + data.id, data )
              .then(function (response) {
                resolve(response.data);
              })
              .catch(function (error) {
              });

        });
    }
}

export default new API();

