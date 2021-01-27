import React from 'react';
import {HeaderArea} from './styled';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <HeaderArea>
           <Link to='/' style={{ textDecoration: 'none' }}><h2>TESTE SOFTWRAP</h2> </Link> 
        </HeaderArea>
    );
}

export default Header