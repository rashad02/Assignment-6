import React from 'react';
import TodoTextInput from './todo-text-input';

const Header = () => {
  return (
    <header>
      <h1>todos</h1>
      <TodoTextInput />
    </header>
  );
}

export default Header;