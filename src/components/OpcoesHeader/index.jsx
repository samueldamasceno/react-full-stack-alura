import styled from "styled-components"

const ListaOpcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ListaOpcoes>
            { opcoes.map((texto) => (
            <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </ListaOpcoes>
    )
}

export default OpcoesHeader