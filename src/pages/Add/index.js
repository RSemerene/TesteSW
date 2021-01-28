import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {New} from './styled';

import firebase  from '../../../src/firebase'

import "firebase/database"
import "firebase/auth";
import "firebase/firestore";

export default class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            Nome:'',
            Idade:'',
            EstadoCivil: '',
            CPF: '',
            Cidade:'',
            Estado:''
        }
        this.adicionar = this.adicionar.bind(this);
        const firebaseConfig = {
            apiKey: "AIzaSyAlR1fnPDCWDoOyu7YOk_ESB6zifUZa90c",
            authDomain: "projeto-testesw.firebaseapp.com",
            projectId: "projeto-testesw",
            storageBucket: "projeto-testesw.appspot.com",
            messagingSenderId: "930419471084",
            appId: "1:930419471084:web:1edd76f1d678cf101d6bc9",
            measurementId: "G-P8JWK9RZRB"
          };
          if (!firebase.apps.length){
              firebase.initializeApp(firebaseConfig);
          }
        
    }


adicionar(e) {
    firebase.firestore().collection('dados').add({
    Nome:this.state.Nome,
    Idade:this.state.Idade,
    EstadoCivil:this.state.EstadoCivil,
    CPF: this.state.CPF,
    Cidade:this.state.Cidade,
    Estado:this.state.Estado
        })
    
}




render(){
    return (
        <>

  
            <New>
            <div className='areabutt'><Link to='/'><button className='bhome'>Page Home</button></Link></div>
  
            <h2>Cadastrar Novo Usuário</h2>
            <form onSubmit={this.adicionar}>
                <label>Nome
               <input type='text' value={this.state.Nome} onChange={(e)=>this.setState({Nome: e.target.value})}/>
               </label>

               <label>Idade
               <input type='number'value={this.state.Idade} onChange={(e)=>this.setState({Idade: e.target.value})}/>
               </label>

               <label>Estado Civil
               <input type='text'value={this.state.EstadoCivil} onChange={(e)=>this.setState({EstadoCivil: e.target.value})}/>
               </label>

               <label>CPF
               <input type='number'value={this.state.CPF} onChange={(e)=>this.setState({CPF: e.target.value})}/>
               </label>

               <label>Cidade
               <input type='text'value={this.state.Cidade} onChange={(e)=>this.setState({Cidade: e.target.value})}/>
               </label>

               <label>Estado
               <input type='text'value={this.state.Estado} onChange={(e)=>this.setState({Estado: e.target.value})}/>
               </label>

                
                <input className='bfinal' type='submit' value='Adicionar' />
                

            
              
              
            </form>
            </New>
 
    </>
    );
}
}