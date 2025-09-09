import React, {Suspense} from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import UserCard from "@/components/UserCard";
import PostCard from "@/components/PostCard";
import { getUsers } from "@/lib/api";

// Server Component asincrono per gli utenti
async function UsersList() {
  const resp = await getUsers();
  // throw new Error('Errore generato a mano');
  
  if (!resp.success) {
    throw new Error(`Failed to fetch users: ${resp.message}`);
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resp.data.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
    </div>    
    </>
  );
}



export default function UsersPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Elenco Utenti</h1>
                    <p className="text-gray-600">Utenti Registrati</p>

                </div>
                <Suspense fallback={<LoadingSpinner size="lg" message="Caricamento utenti..." />}>
                    <UsersList />
                </Suspense>
            </div>
        </>
    );
}