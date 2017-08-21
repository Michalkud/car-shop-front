import * as types from './types';

const requestContacts = () => ({
    type: types.REQUEST_CONTACTS
});

const requestContactsSuccess = (data) => ({
    type: types.REQUEST_CONTACTS_SUCCESS,
    payload: { data }
  });
  
  const requestProductsError = (message) => ({
    type: types.REQUEST_CONTACTS_ERROR,
    payload: { message }
  });

export {
    requestContacts,
    requestContactsSuccess,
    requestProductsError
};
