import TodoList from "@/components/TodoList";
import { fetchTodos, fetchUsers } from "@/lib/actions";
import { TodoItem, User } from "@/types";


export default async function TodosPage() {

    const [todos, users] : [TodoItem[], User[]] = await Promise.all([
        fetchTodos(),
        fetchUsers()
    ]);

    return (
        <>
            <div>
                <h1>Todos ({todos.length})</h1>
                <p>CRUD Esempio</p>
                <TodoList todos={todos} users={users} />
            </div>
        </>
    );


}