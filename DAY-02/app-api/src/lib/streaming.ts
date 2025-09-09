import { User, Post, Comment, TodoItem, StreamingData, StreamingLoading } from "../types";


export async function* streamData(): AsyncGenerator<Partial<StreamingData>, void, unknown> {
    // Stream users
    const usersResponse = await fetch('http://localhost:4000/users');
    const users: User[] = await usersResponse.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield { users };


    // Stream posts
    const postsResponse = await fetch('http://localhost:4000/posts');
    const posts: Post[] = await postsResponse.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield { posts };


    // Stream comments
    const commentsResponse = await fetch('http://localhost:4000/comments');
    const comments: Comment[] = await commentsResponse.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield { comments };


    // Stream todos
    const todosResponse = await fetch('http://localhost:4000/todos');
    const todos: TodoItem[] = await todosResponse.json();
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield { todos };
}

/*
for await (const val of streamData()) {
    console.log(val);
}
    */

/*
export async function* streamData() {
  const items = ["a", "b", "c"];

  for (const item of items) {
    // simula una chiamata async
    await new Promise(res => setTimeout(res, 1000));
    yield item; // produce un valore alla volta
  }
}

for await (const val of streamData()) {
    console.log(val);
}
    */