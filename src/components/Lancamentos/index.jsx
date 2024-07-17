import styled from "styled-components";
import { livros } from "./dadoslancamentos";
import { Titulo } from "../Titulo";
import imagemLivro from "../../img/livro2.png"
import Card from "../Card";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor={"000"}
                tamanhoFonte={"36px"}
            >
                ULTIMOS LANCAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt={livro.nome}/>
                ) ) }
            </NovosLivrosContainer>
            <Card
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos