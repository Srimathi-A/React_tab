import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from'./components/menu/Menu';
import Person from './components/page/Person';
class Main extends Component{
    render(){
    return(
        <BrowserRouter>
        <div classe="container">
            <div class="Top">
            <h1>Profile</h1>
            </div>
            <div class="Bottom">
                <div class="Left"><Menu/></div>
                <div class="Right"><Person/></div>
            </div>
        </div>
        </BrowserRouter>
        )}
}
export default Main;