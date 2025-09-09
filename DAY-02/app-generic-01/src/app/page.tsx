import React, {Suspense} from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import UserCard from "@/components/UserCard";
import PostCard from "@/components/PostCard";
import { getUsers, getPosts } from "@/lib/api";

// Server Component asincrono per gli utenti
async function UsersSection() {
  const resp = await getUsers();

  if (!resp.success) {
    throw new Error('Failed to fetch users: ${resp.message}');
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Utenti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resp.data.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}


// Server Component asincrono per i posts
async function PostsSection() {
  const [postsResp, usersResp] = await Promise.all([
    getPosts(), 
    getUsers()
  ]);

  if (!postsResp.success) {
    throw new Error('Failed to fetch posts: ${postsResp.message}');
  }

  if (!usersResp.success) {
    throw new Error('Failed to fetch users: ${usersResp.message}');
  }

  const posts = postsResp.data;
  const users = usersResp.data;
  
  return (
    <>
      <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Post recenti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => {
          const author = users.find(u => u.id === post.userId);
          return <PostCard key={post.id} post={post} author={author || undefined} />;
        })}
      </div>
    </section>
    </>
  );

}


export default function HomePage() {
  return (
   <>
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Benvenuto alla demo dei componenti!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Questa è una semplice applicazione Next.js che dimostra l'uso di componenti server e client.
        </p>
      </section>

      <Suspense fallback={<LoadingSpinner size="lg" message="Caricamento utenti..."/>}>
        <UsersSection />
      </Suspense> 

      <Suspense fallback={<LoadingSpinner size="lg" message="Caricamento posts..."/>}>
        <PostsSection />
      </Suspense> 

    </div>
   </>
  );
}
