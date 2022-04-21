import { all } from 'redux-saga/effects';
import { watchAdd } from './todoSaga.ts';
import { watchJoin, watchLogin } from "./userSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), watchAdd(), watchLogin()]);
  }