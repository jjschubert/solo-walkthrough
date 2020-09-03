import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPets() {
    console.log('got to fetch pets')
    //get request
   let response = yield axios.get('/api/pet');
//should do try catch - skipping for time
    //send to reducer
    yield put({type: 'SET_PETS', payload: response.data})
}

//must put this in the root saga to work
//import and in the reducer itself
function* petsSaga() {
    yield takeLatest('FETCH_PETS', fetchPets)
}

export default petsSaga;