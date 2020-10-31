import React from 'react';
import MainSection from "./components/main-section.jsx";
import TodoTextInput from './components/todo-text-input.jsx';
import './App.css';

function App() {
  return (
    <div className="normal">
      <TodoTextInput />
      <MainSection />
    </div>
  );
}

export default App;
