import { ActionTypes } from "../actionTypes";

//Aksiyonlar kod içinde sürekli tekrar ettiği için ayrı bir dosyada yazdık
//payload type gibi direk belirtilemiyor bu yüzden fonksiyon içinde objede döndürüp parametre olarak aldık (payload)=>
export const addTodo= (payload)=> ({
    type:ActionTypes.ADD_TODO,
    payload: payload
});

export const updateTodo= (payload)=> ({
    type:ActionTypes.UPDATE_TODO,
    payload: payload
});

export const removeTodo= (payload)=> ({
    type:ActionTypes.REMOVE_TODO,
    payload: payload
});

export const setTodos= (payload)=> ({
    type:ActionTypes.SET_TODOS,
    payload: payload
});
