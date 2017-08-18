import * as types from './types';

const requestContacts = () => ({
    type: types.REQUEST_CONTACTS
});

const requestProductsSuccess = (data) => ({
    type: types.REQUEST_PRODUCTS_SUCCESS,
    payload: { data }
  });
  
  const requestProductsError = (message) => ({
    type: types.REQUEST_PRODUCTS_ERROR,
    payload: { message }
  });

export {
    requestContacts
};
