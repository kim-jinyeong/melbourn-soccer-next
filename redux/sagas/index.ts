import { all } from 'redux-saga/effects';
import { watchAdd } from './todoSaga.ts';
import { watchJoin } from "./userSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), watchAdd()]);
  }