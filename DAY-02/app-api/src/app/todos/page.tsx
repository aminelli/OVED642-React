import { fetchTodos, fetchUsers } from "@/lib/actions";

import TodoList from "../../components/TodoList";

export default async function TodosPage() {
    const [todos, users] = await Promise.all([
        fetchTodos(), 
        fetchUsers()
    ]);
    

    return (
        <div>
            <h1>Gestione TODO</h1>
            <p>CRUD Example</p>

            <TodoList todos={todos} users={users} />
        </div>
    );
}