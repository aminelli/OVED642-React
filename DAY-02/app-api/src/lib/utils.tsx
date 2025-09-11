import { User } from "@/types";


export const getUserName = (users: User[], userId: number) => users.find(user => user.id == userId)?.name || 'Unknown';
   