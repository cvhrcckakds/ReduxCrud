import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  //useSelector storedaki reducerlara abone olmayı yani reducerlarda tutulan verilere erişmeye yarar
  // store çok büyük olacağından sadece genelde ihtiyacımız olan reducerlara abone oluruz
  // bunun için=> store.reducerİsmi yazılır
  const store = useSelector((store) => store.todoReducer); //abonelik store abone ettik stora yazacak tüm veriyi
  
  return (
    <div>
      {store.todos.map(
        (
          todo //sayfaya ekle dedikten sonra eklenileni gösterir.
        ) => (
          <TodoCard todo={todo} key={todo.id}/>
        )
      )}
    </div>
  );
};

export default ListTodos;