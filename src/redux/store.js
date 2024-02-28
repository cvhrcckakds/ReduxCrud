/*
!Store oluşturma:
1. redux kütüphanesinden "createStore" metodu import edilir.
2. store verisinde tutulan veriler kategorize edilir ve reducerlar oluşturulır
3. oluşturulan reducerlar combineReducers metodu ile birleştirilir
4. store oluşturulan yeni reducer tanıtılır
5. oluşturulan store projeye tanıtılır.
*/

import { createStore, combineReducers } from "redux";
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';

//birden fazla reducer varsa birleştirilir
const rootReducer = combineReducers({
    todoReducer,
    userReducer,

})

//storu oluştur ve reducerları tanıt
const store =createStore(rootReducer);

export default store;