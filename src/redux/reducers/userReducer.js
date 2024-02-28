//State de tutulacak verilerin ilk değeri
const initialState={ 
    users: [],
    category: [],
};

const userReducer=(state=initialState, action) =>{
    switch(action.type){
        case 'ADD_user':
            return '';
        case 'REMOVE_user':
            return '';
            //eğer gelen aksiyon yukardakileirn hiç biri değilse statei değiştirme
            default:
                return state
    }
};

//Reducer'ı stora tanıtmak için export et:
export default userReducer;