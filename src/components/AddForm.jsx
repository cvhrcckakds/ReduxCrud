import { v4} from 'uuid';
import {  useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';
import axios from 'axios';


const AddForm = () => {
    //dispatch kurulum
    const dispatch= useDispatch();

    //form gönderilince
    const handleSubmit=(e)=>{
        e.preventDefault();

        //inputttaki veriye erişme
        const text= e.target[0].value;
        
        //todo objesi oluştur
        const newTodo={
            id: v4(),
            text: e.target[0].value,
            is_done:false,
            created_at: new Date().toLocaleDateString(),
        }

        axios
        .post("/todos", newTodo)
        .then(()=> {
        dispatch(addTodo(newTodo))
        }); //Oluşturulan todo'yu stora ekle:(önce disthpach import et sonra kur)
       
    
    }
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 d-flex my-5">
        <input
        placeholder="örn: typescript projesi oluştur"
        className="form-control " type="text" />
        <button className="btn btn-warning">Ekle</button>
      
    </form>
  )
}

export default AddForm
