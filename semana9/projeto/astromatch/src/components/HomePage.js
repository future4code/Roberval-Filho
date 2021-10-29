import React from "react"
import styled from "styled-components"

const HomeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Janela = styled.div`
border: 2px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
margin: 20px;
width: 500px;

img{
    width: 400px;
    height: 400px;
}
`

export default class HomePage extends React.Component{
    render() {
        return(
            <HomeContainer>
                <Janela>
                    <img src="https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg"></img>
                    <h1>Roberval</h1>
                    <p>Futuro dados que virão da API</p>
                    <div>
                        <button>❌</button>
                        <button>💚</button>
                    </div>
                </Janela>
            </HomeContainer>
        )
    }
}