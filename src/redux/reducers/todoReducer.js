/*
- Storun nasıl değişeceğine karar verir
- normal bir fonksiyondur.
ve iki parametre alır
>state: storeda tutulan verilerin son durumu
>action: verilerin nasıl değişeceğini belirten obje

?önemli: reducer fonksiyonunda return edilen veri storun son hali olur
*/
import { ActionTypes } from "../actionTypes";

//State de tutulacak verilerin ilk değeri
const initialState = {
  todos: [],
  category: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos }; //...ilk değer, değişen değer:eklenen her veriyi stora ekler

    case ActionTypes.REMOVE_TODO:
      //payloadan idsi gelen todoyu diziden çıkarma
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: filtered };

    case ActionTypes.UPDATE_TODO:
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: newTodos };

    //eğer gelen aksiyon yukardakileirn hiç biri değilse statei değiştirme
    default:
      return state;
  }
};

//Reducer'ı stora tanıtmak için export et:
export default todoReducer;
