import { fetchTodos, fetchUsers } from "@/lib/actions";

import TodoList from "../../components/TodoList";
import TodoForm from "@/components/TodoForm";

export default async function TodosPage() {
    const [todos, users] = await Promise.all([
        fetchTodos(), 
        fetchUsers()
    ]);

    console.log("TodosPage");

    return (
        <div>
            <h1>Gestione TODO</h1>
            <p>CRUD Example</p>

            <TodoForm users={users} />
            <br/>
            <TodoList todos={todos} users={users} />
        </div>
    );
}