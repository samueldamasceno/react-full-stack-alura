
import styled from 'styled-components';

import logo from '../../img/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

const Logo = () => (
    <LogoContainer>
        <LogoImg src={logo} alt='logo'></LogoImg>
        <p><strong>Alura</strong>Books</p>
    </LogoContainer>
)

export default Logo;