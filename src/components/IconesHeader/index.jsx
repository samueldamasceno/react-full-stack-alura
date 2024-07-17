import styled from 'styled-components';

import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
            { icones.map((icone) => (
              <Icone key={icone}><img src={icone} alt="Ícone"></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader