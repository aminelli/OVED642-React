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
        </>
    );


}
