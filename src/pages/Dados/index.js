import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Dados} from './styled'

import firebase  from '../../../src/firebase'

import "firebase/database"
import "firebase/auth";
import "firebase/firestore";


    
    
   const render =() => {
    return (
        <>
      
        <Dados>
    <div className="areabutt"> 
  <Link to='/'><button className='bhome'>Page Home</button></Link></div>
  <div>
      <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Estado Civil</th>
                    <th>CPF</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    

                </tr>
            </thead>
            <tbody>
            
                
                   
                
            </tbody>

      </table>
  </div>
  </Dados>
  
    </>
    );
    }
export default render;