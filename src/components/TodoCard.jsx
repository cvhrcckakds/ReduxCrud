import { useState } from "react";
import Modal from "./Modal";;
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";


const TodoCard = ({ todo }) => {
  const dispatch = useDispatch(); // useDispatch hook'unu kullanarak dispatch fonksiyonunu alın
  const [isOpen, setIsOpen]=useState(false);

  // stordan todoyu kaldır
  const handleDelete = () => {
    dispatch({
      type: ActionTypes.REMOVE_TODO,
      payload: todo.id,
    });
  };

  // storadaki todonun isdone değerini tersine çevir
  const handleStatus=()=>{
    //todo'nun isdone değerini terse çevir
    const updated={...todo, is_done: !todo.is_done};

    // storedaki eski todoyu güncel todo ile değiştir
    dispatch({
        type: ActionTypes.UPDATE_TODO,
        payload:updated,
    })
}

  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor...'}</h6>
      <p>{todo.created_at}</p>
      <button onClick={()=> setIsOpen(true)} className="btn btn-primary ">Düzenle</button>
      <button onClick={handleStatus} className="btn btn-success mx-3">{todo.is_done ? "Geri Al" : "Tamamla"}</button>
      <button onClick={handleDelete} className="btn btn-danger">Sil</button>
      {isOpen&& < Modal todo={todo} close={()=>setIsOpen(false)}/> }

      
    </div>
  );
};

export default TodoCard;
