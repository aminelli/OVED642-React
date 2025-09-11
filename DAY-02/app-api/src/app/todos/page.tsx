import TodoList from "@/components/TodoList";
import { fetchTodos, fetchUsers, toggleTodo } from "@/lib/actions";
import { TodoItem, User } from "@/types";


export default async function TodosPage() {

    /*
    const handleToggleTodo = async (todoId: number, completed:boolean) => {
        toggleTodo(todoId, completed);
        todos = await fetchTodos();
    };
    */

    return (
        <>
            <div>
                <h1>Todos</h1>
                <p>CRUD Esempio</p>
                <TodoList />
            </div>
        </>
    );


}