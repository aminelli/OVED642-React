'use client';

import { useEffect, useState } from 'react';
import { Post, TodoItem, User, Comment } from '../../types/index';
import StreamingUsers from './StreamingUsers';
import StreamingPosts from './StreamingPosts';
import StreamingComments from './StreamingComments';
import StreamingTodos from './StreamingTodos';
import { streamData } from '@/lib/streaming';


export default function StreamingDemo() { 
    const [users, setUsers]       = useState<User[]>([]);
    const [posts, setPosts]       = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const [todos, setTodos]       = useState<TodoItem[]>([]);

    const [loading, setLoading]   = useState({
        users: true,
        posts: true,
        comments: true,
        todos: true
    });

   const handleStreaming = async () => {
        try {
            for await (const chunk of streamData()) {

                if (chunk.users && loading.users) {
                    setUsers(chunk.users);
                    setLoading(prev => ({...prev, users: false}));
                }

                if (chunk.posts && loading.posts) {
                    setPosts(chunk.posts);
                    setLoading(prev => ({...prev, posts: false}));
                }

                if (chunk.comments && loading.comments) {
                    setComments(chunk.comments);
                    setLoading(prev => ({...prev, comments: false}));
                }

                if (chunk.todos && loading.todos) {
                    setTodos(chunk.todos);
                    setLoading(prev => ({...prev, todos: false}));
                }

            }
        } catch (error) {
            console.log("Error during streaming:", error);
        }
    };

    useEffect(
        () => {
            handleStreaming();
        }, 
        []
    );

    return (
        <>
            <div className="streaming-container">
                <StreamingUsers    users={users}       loading={loading} />
                <StreamingPosts    posts={posts}       loading={loading} />
                <StreamingComments comments={comments} loading={loading} />
                <StreamingTodos    todos={todos}       loading={loading} />
            </div>
        </>
    );

}