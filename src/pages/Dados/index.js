import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { EstiloDados } from './styled'

import firebase from '../../../src/firebase'

import "firebase/database"
import "firebase/auth";
import "firebase/firestore";


const Dados = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        readfiles()
    }, [])

        const readfiles = async () => {
        const snapshot = await firebase.firestore().collection('dados').get()
        const dados = snapshot.docs.map(doc => doc.data());
        setState(dados)
    }
    const remove = (doc) => {
        firebase.firestore().collection('dados').doc(String(doc)).delete()      
        window.location.reload(true)
}

    return (
        <>
            <EstiloDados>
                <div className="areabutt">
                    <Link to='/'><button className='bhome'>Page Home</button></Link>
                    <a href='/dados'><input className='bfinal' type='submit' value='Atualizar'/></a></div>
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

                        { state.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doc.Nome}</td>
                                        <td>{doc.Idade}</td>
                                        <td>{doc.EstadoCivil}</td>
                                        <td>{doc.CPF}</td>
                                        <td>{doc.Cidade}</td>
                                        <td>{doc.Estado}</td>
                                        <td className='actions'><input type='submit' value='Editar' onClick={() => remove()}/>
                                        <input type='submit' value='Remover' onClick={() => remove(doc.key)}/></td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
            </EstiloDados>
        </>
    );
}
export default Dados;