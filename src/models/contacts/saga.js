import { put, call, takeLatest, fork } from 'redux-saga/effects';
import _ from 'lodash';

import * as actions from './actions';
import * as types from './types';
import API from 'services/api';


const _requestContacts = function*() {
    const contacts = yield call(API.fetchContacts);
    if (_.isObjectLike(contacts)) {
        yield put(actions.requestContactsSuccess(contacts));
    } else {
        yield put(actions.requestProductsError('Something went wrong'));  
    }
};

const _editContact = function*(data) {
    const contact = yield call(API.editContact, data.payload.data);

    if (_.isObjectLike(contact)) {
        yield put(actions.editContactSuccess(contact));
    }
};

const _requestContactById = function*(data) {
    const contact = yield call(API.getContact, data.payload.data);

    if (_.isObjectLike(contact)) {
        yield put(actions.getContactSuccess(contact));
    }
}

const editContact = function*(data) {
    yield takeLatest(types.EDIT_CONTACT, _editContact);
};

const requestContactById = function*(data) {
    console.log(data);
    yield takeLatest(types.REQUEST_CONTACT_BY_ID, _requestContactById);
};

const requestContacts = function*() {
    yield takeLatest(types.REQUEST_CONTACTS, _requestContacts);
};

const saga = [
    requestContacts,
    editContact,
    requestContactById
];

export default saga.map(s => fork(s));

