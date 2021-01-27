import React from 'react'
import {Link} from 'react-router-dom';
import {Dados} from './styled'

const Page = () => {
    return (
        <>
        <Dados>
    <div className="areabutt"> 
  <Link to='/'><button>Page Home</button></Link></div>
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
                    <th>Actions</th>

                </tr>
            </thead>

      </table>
  </div>
  </Dados>
    </>
    );
}
export default Page;