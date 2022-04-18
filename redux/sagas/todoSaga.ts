import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { postTodo } from "../api/todoApi.ts";
import { todoActions } from "../reducers/todoReducer.ts";

interface TodoAddtype{
    type: string;
    payload:{
        userid:string,
        task:string
    }
}

interface TodoAddSuccessType{
    type:string;
    payload:{
        userid: string
    }
}

function* addTodo(todo: TodoAddtype){
    try{
        alert(' 진행 3 : saga 내부 add 성공 ' + JSON.stringify(todo))
        const response : TodoAddSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3 : sage 내부 add 실패')
        yield put(todoActions.addFailure(error))
    }
}
export function* watchAdd(){
    yield takeLatest(todoActions.addRequest, addTodo)
}