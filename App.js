import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';

class app extends Component
{
  render()
  {
    return (
      <div className="app">
         <Greet />
      </div>
    );
  }
}

export default app;
