import React from 'react'
import {Titulo} from './styled'
import {Link} from 'react-router-dom'


const Page = () => {
    return (
        <>
    <Titulo><div><h2>Seja Bem-Vindo</h2></div>
    <div className="menu" >
    <Link to='/' style={{ textDecoration: 'none' }}><div><p>Home</p></div></Link>
    <Link to='/dados' style={{ textDecoration: 'none' }}><div><p>Dados</p></div></Link>
    <Link to='/add' style={{ textDecoration: 'none' }}><div><p>Add</p></div></Link>
    </div>
    </Titulo>
    </>
    );
}
export default Page;