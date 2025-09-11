'use client';

import { TodoItem, User } from "@/types";


import { useTransition, useOptimistic, useState} from "react";
import {getUserName} from "@/lib/utils";
import { fetchTodos, fetchUsers, toggleTodo } from "@/lib/actions";

/*
interface TodoListProps {
    todos: TodoItem[];
    users: User[];
    //onCompleted: (todoId: number, completed: boolean) => void
}
    */

// export default function TodoList({todos, users}: TodoListProps) {
export default function TodoList() {

    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    fetchTodos().then((value) => { setTodos(value); })
    fetchUsers().then((value) => { setUsers(value); })

    let todosClient = todos;

    const [isPending, startTransition] = useTransition();

    const [optimisticTodos, setOptimisticTodo] = useOptimistic(
        todosClient,
        (state, {id, completed}: {id: number, completed: boolean}) => 
            state.map(
                (todo) => todo.id == id ? {...todo, completed} : todo
            )
    );

    const  handleToggle = (todo: TodoItem) => {
        startTransition(() => {
            setOptimisticTodo({id: todo.id, completed: !todo.completed});
            toggleTodo(todo.id, !todo.completed);
            fetchTodos().then((value) => { setTodos(value); })
        });
    };

    return (
        <>
        <div>
            <h2>Todo ({optimisticTodos.length})</h2>

            <div style={{marginBottom: '1rem'}}>
                <strong>Completati:</strong> {optimisticTodos.filter(todo => todo.completed).length} / {optimisticTodos.length}

            </div>
            <div className="grid">
                {
                    optimisticTodos.map((todo) => (
                        <div key={todo.id} data-id={todo.id }  className="card">
                            <div  className={`.todo-item${todo.completed ? '.completed' : ''}`}>
                                
                                <div className="todo-title">
                                    {todo.title}
                                </div>
                                <div style={{marginLeft: 'auto', fontSize: '0.8rem', color: 'blue'}}>
                                    {getUserName(users, todo.userId)}
                                </div>
                                <hr/>
                                <br/>
                                <span style={{marginLeft: 'auto', fontSize: '0.8rem', color: 'blue'}}>Completato: </span>
                                <input 
                                    type="checkbox" 
                                    className="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todo)}
                                    disabled={isPending} 
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        </>
    );


}
