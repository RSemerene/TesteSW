import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { EstiloDados } from './styled'

import firebase from '../../firebase'

import "firebase/database"
import "firebase/auth";
import "firebase/firestore";

const Data = () => {
    const [state, setState] = useState([])
    
    useEffect(() => {
        readfiles()
    }, [])

    const readfiles = async () => {
        const snapshot = await firebase.firestore().collection('dados').get()
        const dados = snapshot.docs.map(doc => (
            {
                id: doc.id,
                 ...doc.data()
            }

        ));
        setState(dados)
    }
    const remove = (id) => {
        console.log(id)
        firebase.firestore().collection('dados').doc(id).delete()
        
        const newState = state.filter((doc)=> doc.id != id)
        setState(newState)
        
    }

    return (
        <>
            <EstiloDados>
                <div className="areabutt">
                    <Link to='/'><button className='bhome'>Page Home</button></Link>
                    </div>
                <div>
                    <table border='1'>

                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Estado Civil</th>
                            <th>CPF</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Ações</th>
                        </tr>

                        {state.map((doc, index) => {
                            return (
                                <tr key={index}>
                                    <td>{doc.Nome}</td>
                                    <td>{doc.Idade}</td>
                                    <td>{doc.EstadoCivil}</td>
                                    <td>{doc.CPF}</td>
                                    <td>{doc.Cidade}</td>
                                    <td>{doc.Estado}</td>
                                    <td className='actions'>
                                        <input type='submit' value='Remover' onClick={() => remove(doc.id)} /></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </EstiloDados>
        </>
    );
}
export default Data ;