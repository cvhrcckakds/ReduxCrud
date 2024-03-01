import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";
import { updateTodo } from "../redux/actions/todoActions";
import axios from "axios";


const Modal = ({todo,close}) => {
const dispatch=useDispatch();
const handleSubmit= (e) =>{
    e.preventDefault();
    //inputtaki ismi alma
    const newText = e.target[1].value
    //eski todunun tüm verilerini alıp inputtan aldığımız veri ile güncelliyoruz
    const updated={...todo, text:newText}

    axios.put(`/todos/${todo.id}`,updated)
    .then(()=> 
    // stordaki todoyu güncelle
    dispatch(updateTodo(updated)))

    //modalı kapat
    close();
}
  return (
    <div className="modal d-block text-dark bg-black bg-opacity-50" tabindex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Todoyu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Başlık</label>
            {/* sadece value yazarsan düzenle modalı açıldığında düzenlenmeye müsade etmez bu yüzden defaultvalue kullandık */}
            <input defaultValue={todo.text} className="form-control shadow mt-2" type="text" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={close}
             
            >
              Vazgeç
            </button>
            {/* tetiklenmesi için type textten submite çevirdik */}
            <button type="submit" className="btn btn-primary"> 
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
