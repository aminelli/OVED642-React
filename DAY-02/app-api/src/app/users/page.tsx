import { User } from "@/types";
import {fetchUsers} from "@/lib/actions";

export default async function UsersPage() {

    const users: User[] = await fetchUsers();

    return (
        <>
            <div>
                <h1>Users</h1>
                <p>Lista utenti carticata tramite server action (fetch)</p>

                <div className="grid">
                    {users.map((user) => (
                        <div key={user.id} className="card">
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );

}
