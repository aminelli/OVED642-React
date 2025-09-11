// src/components/UserList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store/store';
import { fetchUsers, removeUser } from '../features/users/usersSlice';
import { addUser } from '../features/users/usersSlice';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
    };
    dispatch(addUser(newUser));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Users</h2>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;