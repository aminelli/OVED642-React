'use client';

// useState e useTransition sono degli hook
import React, {useState, useTransition} from 'react';

interface InteractivePostActionsProps {
    postId: number;
    initialLikes: number;    
}


export default function InteractivePostActions({ postId, initialLikes }: InteractivePostActionsProps) {

    // Gestione dello stato locale del componente

    // Gesytione dello stato locale dei likes
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleLike = () => {
        startTransition( () => {
            if (isLiked) {
                /*
                setLikes(
                    function(prev){
                    return prev - 1;
                });
                */
                setLikes(prev => prev - 1);
                setIsLiked(false);
            } else {
                setLikes(prev => prev + 1);
                setIsLiked(true);
            }
        });
    }

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'My Post',
                    text: `I found this post interesting: Post ID ${postId}`,
                    url: window.location.href
                });
                // alert('Post shared successfully!');
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            //alert('Link copied to clipboard!');
        }
    };

    return (
        <>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleLike}
                    disabled={isPending} 
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
                    isLiked
                    ? 'bg-red-100 text-red-600 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                    <span>{isLiked ? '❤️' : '🤍'}</span>
                    <span>{likes}</span>
                </button>   

                <button
                    onClick={handleShare}
                    className="flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                >
                    <span>🔗</span>
                    <span>Share</span>
                </button>
            </div>        
            
            <div className="text-sm text-gray-500">
                Post #{postId}
            </div>

        </div> 
        
        </>
    );

}
