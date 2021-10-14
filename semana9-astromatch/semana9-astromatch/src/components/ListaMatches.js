import React from "react"
import styled from "styled-components"

const ContainerLista = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 400px;
    justify-content: space-between;
    align-items: center;
`

const FotoImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;
`


export const listaMatches = (props) => {
    return(
        <ContainerLista>
            <FotoImg src={props.photo}/>
            <h2>{props.name}</h2>
        </ContainerLista>
    )
}

export default listaMatches 