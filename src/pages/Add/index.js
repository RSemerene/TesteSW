import React from 'react'
import {Link} from 'react-router-dom';
import {New} from './styled';

const Add = () => {
    return (
        <>

  
            <New>
            <div className='areabutt'><Link to='/'><button className='bhome'>Page Home</button></Link></div>
  
            <h2>Cadastrar Novo Usuário</h2>
            <form >
                <label>Nome
               <input type='text'/>
               </label>

               <label>Idade
               <input type='number'/>
               </label>

               <label>Estado Civil
               <input type='text'/>
               </label>

               <label>CPF
               <input type='number'/>
               </label>

               <label>Cidade
               <input type='text'/>
               </label>

               <label>Estado
               <input type='text'/>
               </label>

               <button>Adicionar</button>
              
              
            </form>
            </New>
 
    </>
    );
}
export default Add;