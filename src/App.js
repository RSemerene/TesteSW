import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

import Routes from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';


const Page = () => {
  return (
    <BrowserRouter>
    <Template>
      <Header/>

      <Routes />

    </Template>
   
    </BrowserRouter>
  );
}

export default Page;
