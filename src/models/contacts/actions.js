import * as types from './types';

const requestContacts = () => ({
    type: types.REQUEST_CONTACTS
});

const deleteContactById = (id) => ({
    type: types.DELETE_CONTACT_BY_ID,
    payload: { id }
});

const createContact = (data) => ({
    type: types.CREATE_CONTACT,
    payload: { data }
})

const selectEmptyUser = () => ({
    type: types.SELECT_EMPTY
})

const selectContactById = (data) => ({
    type: types.REQUEST_CONTACT_BY_ID,
    payload: { data }
});

const getContactSuccess = (data) => ({
    type: types.GET_CONTACT_SUCCESS,
    payload: { data }
})

const requestContactsSuccess = (data) => ({
    type: types.REQUEST_CONTACTS_SUCCESS,
    payload: { data }
  });

const editContactSuccess = (data) => ({
    type: types.EDIT_CONTACT_SUCCESS,
    payload: { data }
});

const editContact = (data) => ({
    type: types.EDIT_CONTACT,
    payload: { data }
});


  
  const requestProductsError = (message) => ({
    type: types.REQUEST_CONTACTS_ERROR,
    payload: { message }
  });

export {
    requestContacts,
    requestContactsSuccess,
    requestProductsError,
    selectContactById,
    editContact,
    editContactSuccess,
    getContactSuccess,
    deleteContactById,
    createContact,
    selectEmptyUser
};
