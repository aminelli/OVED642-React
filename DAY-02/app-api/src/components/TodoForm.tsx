'use client';

import { createTodo } from "@/lib/actions";
import { TodoItem, User} from "@/types";

import { useActionState, useState } from "react";

interface TodoFormProps {
    users: User[]
}

interface FormState {
    success: boolean,
    message: string,
    title: string | ""
}

 
export default function TodoForm({ users} : TodoFormProps) {


    const [state, formAction, isPending] = useActionState(
        async (prevState: any, formData: FormData) => {
            try {
                let todoItem = await createTodo(formData);
                return { success: true, error: null, title: todoItem.title }
            } catch (error) {
                return { success: false, error: "Errore nella creazione del todo"}   
            }
        },
        {
            success:false,
            error: null
        }
    );

    const [title, setTitle] = useState("");

    return (
        <>
        <div className="grid">
            <div className="card">
                <form action={formAction} className="form">
                    <h2>Creazione nuovo TODO</h2>

                    <div className="form-group">
                        <label htmlFor="title">Titolo</label>
                        <input type="text" name="title" id="title" value={title}
                          required placeholder="Attività da svolgere" disabled={isPending}
                          onChange={(e) => setTitle(e.target.value)}
                          />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userId">Titolo</label>
                        <select name="userId" id="userId" required disabled={isPending}>
                            <option value=""> Selezionare un utente</option>
                            {users.map(
                                    (user) => (
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                    )
                                )
                            }
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isPending}>
                        {isPending ? 'Creazione Todo in corso ...' : 'Salva Todo'}
                    </button>
                    
                    
                    {!state.success && <p style={{ color: 'red', marginTop:'1rem'}}>Errore: {state.message}</p>}

                    {state.success && <p style={{ color: 'green', marginTop:'1rem'}}>Todo creato con successo</p>}

                </form>
            </div>
        </div>
           
        
        </>
    );


}