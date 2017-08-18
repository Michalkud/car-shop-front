import { put, call } from 'redux-saga/effects';
import _ from 'lodash';

import * as actions from './actions';
import * as types from './types';
import API from 'services/api';


const _requestContacts = function*() {
    const contacts = yield call(API.fetchContacts);
    if (_.isObjectLike(contacts)) {
        yield put(actions.requestContactsSuccess(contacts))
    } else {

    }
};

const requestContacts = function*() {
    yield;
};

