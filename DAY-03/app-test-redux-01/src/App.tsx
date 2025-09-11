// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/Counter';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h1>React 19 + TypeScript + Redux Toolkit Example</h1>
        <Counter />
        <UserList />
      </div>
    </Provider>
  );
};

export default App;