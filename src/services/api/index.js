class API {

    fetchContacts() {
        const contacts = [
            {
                id: 1,
                name : 'Michal Kudrnáč',
                phone: '604 385 782',
                address: 'Na Cihlářce 576, Nová Paka, 50901',
                email: 'michalkud@gmail.com',
                web: 'bravecrew.cz',
                birthday: '10.6.1993'
            },
            {
                id: 2,
                name : 'Hana Kudrnáčová',
                phone: '604 385 782',
                address: 'Na Cihlářce 576, Nová Paka, 50901',
                email: 'michalkud@gmail.com',
                web: 'bravecrew.cz',
                birthday: '10.6.1993'
            },
            {
                id: 3,
                name : 'Honza Kudrnáč',
                phone: '604 385 782',
                address: 'Na Cihlářce 576, Nová Paka, 50901',
                email: 'michalkud@gmail.com',
                web: 'bravecrew.cz',
                birthday: '10.6.1993'
            }];

            return new Promise((resolve, reject) => {
                setTimeout(() => { 
                    resolve(contacts); 
                }, 100);
            });
    }
}

export default new API();

