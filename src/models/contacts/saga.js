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

const requestContacts = function*() {
    yield takeLatest(types.REQUEST_CONTACTS, _requestContacts);
};

const saga = [
    requestContacts
];

export default saga.map(s => fork(s));

