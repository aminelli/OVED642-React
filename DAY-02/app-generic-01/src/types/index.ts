export interface User {
  id      : number;
  name    : string;
  email   : string;
  avatar? : string
}


export interface Post {
  id        : number;
  title     : string;
  content   : string;
  userId    : number;
  createdAt : Date;
  like      : number;
}


export interface ApiResponse<T> {
  data   : T;
  status : number;
  message? : string;
}