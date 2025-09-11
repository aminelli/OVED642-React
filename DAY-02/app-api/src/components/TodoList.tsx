'use client';

import { TodoItem, User } from "@/types";
import { toggleTodo } from "@/lib/actions";

import { useTransition, useOptimistic} from "react";
import {getUserName} from "@/lib/utils";
import { start } from "repl";

interface TodoListProps {
    todos: TodoItem[];
    users: User[];
}


export default function TodoList({todos, users}: TodoListProps) {

    const [isPending, startTransition] = useTransition();

    const [optimisticTodos, setOptimisticTodo] = useOptimistic(
        todos,
        (state, {id, completed}: {id: number, completed: boolean}) => 
            state.map(
                (todo) => todo.id == id ? {...todo, completed} : todo
            )
    );

    const handleToggle = (todo: TodoItem) => {
        startTransition(() => {
            setOptimisticTodo({id: todo.id, completed: !todo.completed});
            toggleTodo(todo.id, !todo.completed);
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
                        <div key={todo.id} className="card">
                            <div  className={`.todo-item${todo.completed ? '.completed' : ''}`}>
                                <input 
                                    type="checkbox" 
                                    className="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todo)}
                                    disabled={isPending} 
                                />
                                <div className="todo-title">
                                    {todo.title}
                                </div>
                                <div style={{marginLeft: 'auto', fontSize: '0.8rem', color: 'blue'}}>
                                    {getUserName(users, todo.userId)}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
        </>
    );


}
