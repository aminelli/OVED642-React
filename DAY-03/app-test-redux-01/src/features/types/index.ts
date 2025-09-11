export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CounterState {
  value: number;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}