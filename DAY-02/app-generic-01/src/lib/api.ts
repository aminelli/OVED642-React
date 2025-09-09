import { User, Post, ApiResponse} from '../types';

// simulazione di chiamata per ottenere la lista degli uteni

export async function getUsers(): Promise<ApiResponse<User[]>> {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un ritardo di 1 secondo

    const users: User[] = [
        { id: 1, name: 'Antonio Minelli', email: 'am@example.com' },
        { id: 2, name: 'Riccardo Vendola', email: 'rv@example.com' },
        { id: 3, name: 'Lisa Raimondi', email: 'lr@example.com' },
        { id: 4, name: 'Guglielmo Ponteduro', email: 'gp@example.com' }
    ];

    return {
        data: users,
        success: true,
        message: 'Users fetched successfully'
    };
}

export async function getPosts(): Promise<ApiResponse<Post[]>> {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un ritardo di 1 secondo

    const posts: Post[] = [
        { id: 1, title: 'First Post', content: 'This is the first post', userId: 1, createdAt: '2023-01-01', likes: 10 },
        { id: 2, title: 'Second Post', content: 'This is the second post', userId: 2, createdAt: '2023-01-02', likes: 5 },
        { id: 3, title: 'Third Post', content: 'This is the third post', userId: 3, createdAt: '2023-01-03', likes: 15 },
     ];

    return {
        data: posts,
        success: true,
        message: 'Posts fetched successfully'
    };
}



export async function getPostById(id: number): Promise<ApiResponse<Post | null>> {
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un ritardo di 1 secondo

    const posts = (await getPosts()).data;
    const post = posts.find(p => p.id === id) || null;

    return {
        data: post,
        success: !!post,
        message: post ? 'Found' : "Not Found"
    };
}

 