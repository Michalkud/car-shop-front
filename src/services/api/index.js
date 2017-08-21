import request from 'request';

class API {

    fetchContacts() {

        return new Promise((resolve, reject) => {
            request('http://localhost:3000/contacts', function(error, response, body) {

                resolve(JSON.parse(body));
            });
        });
    }

    editContact(data) {
        console.log(data);
        return new Promise((resolve, reject) => {
            request({ method: 'PUT', uri: 'http://localhost:3000/contacts/' + data.id, body: data }, function(error, response, body) {
              console.log(error, response, body);
              resolve('ok');
            });
        });
    }
}

export default new API();

