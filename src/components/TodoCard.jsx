import { useState } from "react";
import Modal from "./Modal";;
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";


const TodoCard = ({ todo }) => {
  const dispatch = useDispatch(); // useDispatch hook'unu kullanarak dispatch fonksiyonunu alın
  const [isOpen, setIsOpen]=useState(false);

  // stordan todoyu kaldır
  const handleDelete = () => {
    //apiya silme isteği at
    axios
    .delete(`/todos/${todo.id}`) //veriler apiden gelirken state yönetimi için store güncellememeliyiz api isteği bşarılı olduğu takdirde güncellenmelidir.
    //stordan sil arayüzü günceller
    .then(()=>dispatch(removeTodo(todo.id)))
    .catch(()=>alert("Silme işleminde bir hata oluştu"))
  };

  // storadaki todonun isdone değerini tersine çevir
  const handleStatus=()=>{
    //todo'nun isdone değerini terse çevir
    const updated={...todo, is_done: !todo.is_done};

    axios.put(`/todos/${todo.id}`, updated)
    // storedaki eski todoyu güncel todo ile değiştir
    .then(()=>dispatch(updateTodo(updated)))
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
