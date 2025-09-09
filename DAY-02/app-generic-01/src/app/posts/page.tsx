'use client';

import React, {useState, useCallback, useMemo} from 'react';
import PostCard from '@/components/PostCard';
import { User, Post } from '@/types';
import SearchBox from '@/components/SearchBox';
import LoadingSpinner from '@/components/LoadingSpinner';


const mockPosts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post', userId: 1, createdAt: '2023-01-01', likes: 10 },
    { id: 2, title: 'Second Post', content: 'This is the second post', userId: 2, createdAt: '2023-01-02', likes: 5 },
    { id: 3, title: 'Third Post', content: 'This is the third post', userId: 3, createdAt: '2023-01-03', likes: 15 },
];


const mockUsers: User[] = [
    { id: 1, name: 'Antonio Minelli', email: 'am@example.com' },
    { id: 2, name: 'Riccardo Vendola', email: 'rv@example.com' },
    { id: 3, name: 'Lisa Raimondi', email: 'lr@example.com' },
    { id: 4, name: 'Guglielmo Pisani', email: 'gp@example.com' }
];


export default function PostsPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Funzione di ricerca useCallback per ottimizare il caricamentoi dati
    const handleSearch = useCallback( 
        (query: string) => {
            setIsLoading(true);
            // simulazione chiamata asincrona
            setTimeout( () => {
                setSearchQuery(query);
                setIsLoading(false);
            }, 1000);
            
        }, 
        []
    );

    // Funzione di ricerca ottimizzata con useMemo per sfruttare la cache
    const filteredPosts = useMemo( 
        () => {
            if (!searchQuery.trim()) return mockPosts;
            
            return mockPosts.filter( post => 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) 
                ||
                post.content.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }, 
        [searchQuery] 
    );

    return (
        <>
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Elenco Post</h1>
            <p className="text-gray-600">
                Usa la ricerca per filtrare
            </p>
            <div className="mx-auto max-w-md">
                <SearchBox 
                    onSearch={handleSearch} 
                    placeholder="Cerca post..." 
                />
            </div>
        </div>
        {
            isLoading ? (
                <LoadingSpinner size="lg" message="Caricamento post..." />
            ) : (
                <div className="spece-y-6">
                     {
                        filteredPosts.length > 0 ? (
                            <>
                            {searchQuery && (
                                <p className="text-gray-600 mb-4">
                                    Trovati {filteredPosts.length} post per &quot;{searchQuery}&quot;
                                </p>
                            )}
                            {filteredPosts.map(post => {
                                const author = mockUsers.find(u => u.id === post.userId);
                                return <PostCard key={post.id} post={post} author={author || undefined} />; 

                            })}
                            </>
                        ) :(
                            <>
                            <div className="text-center py-12">
                                <p className="text-lg text-gray-500">Nessun post trovato per &quot;{searchQuery}&quot;</p>
                                <button
                                    onClick={() => handleSearch('')}
                                    className="mt-4 btn btn-primary"
                                >
                                        Mostra tutti i post
                                </button>    
                            </div>
                            </>
                        )
                     }   
                </div>
            )
        }


        </>
    );

};