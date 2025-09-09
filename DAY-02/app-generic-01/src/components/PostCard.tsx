import React from 'react';
import {User, Post} from '../types';
import {formatDateIT} from '../lib/date';
import InteractivePostActions from './InteractivePostActions';

interface PostCardProps {
    post: Post;
    author?: User | undefined;
}


export default function PostCard({ post, author }: PostCardProps) {

  

    return (
        <>
            <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <header className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                    <div className="flex items-center text-sm text-gray-500">
                        {author && <span className="mr-2">di {author.name}</span>}
                        <span>{formatDateIT(post.createdAt)}</span>
                    </div>
                </header>
                <div className="text-gray-500 max-w-none mb-4">
                    <p>{post.content}</p>
                </div>
                <InteractivePostActions postId={post.id} initialLikes={post.likes} />
            </article>
        </>
    );
}