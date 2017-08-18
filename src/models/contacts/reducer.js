const initState = [
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
        }
    ];

const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;


