import {User, Post} from "@/types";
import { fetchUsers, fetchPosts } from "@/lib/actions";
import {getUserName} from "@/lib/utils";

export default async function PostsPage() {

    const [posts, users]: [Post[], User[]] = await Promise.all([
        fetchPosts(), 
        fetchUsers() 
    ]);

  
        
    return (
        <>
            <div>
                <h1>Posts ({posts.length})</h1>
                <p>Esecuzione in parallelo di più chiamate a api</p>

                <div className="grid">
                    {posts.slice(0,20).map((post) => (
                        <div key={post.id} className="card">
                            <h3>{post.title}</h3>
                            <p style={{fontStretch: 'bold', marginBottom: 5}}>Utente: {getUserName(users, post.userId)}</p>
                            
                            <p>{post.body}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );

}
