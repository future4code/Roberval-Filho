import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ListaMatches from "./ListaMatches"

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const JanelaItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
`

export const MatchesPage = () => {

    const [matchesList, setMatchesList] = useState([])

    useEffect(() =>{
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberval-dionisio-maryam/matches')
        .then((res) => {
            setMatchesList(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const listaMatches = matchesList.map((m) => {
        return <ListaMatches photo={m.photo} name={m.name} />
    })

    return(
        <MainContainer>
                    <JanelaItens>
                        {listaMatches.length > 0 ? listaMatches : <div>Infelizmente você não recebeu matches 💔</div>}
                    </JanelaItens>
        </MainContainer>
    )
}