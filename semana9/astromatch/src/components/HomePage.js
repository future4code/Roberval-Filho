import React, { useState, useEffect } from "react"
import axios from "axios"
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

export const HomePage = () => {

    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberval-dionisio-maryam/person"
    
    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const escolherPessoa = (escolher) => {
        const body = {
            id: profile.id,
            choice: escolher
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberval-dionisio-maryam/choose-person', body)
        .then((res) => {
            getProfile()
        })
        .catch((err) => {
            console.log(err.response)
        })
        //saber se a escolha foi x ou <3
        //Fazer a requisição choose person (POST)
        //No caso de sucesso (then), pedir mais uma pessoa
    }

    return(
        <HomeContainer>
                <Janela>
                    <img src={profile.photo}></img>
                    <h1>{profile.name}, {profile.age}</h1>
                    <p>{profile.bio}</p>
                    <div>
                        <button onClick={() => escolherPessoa(false)}>❌</button>
                        <button onClick={() => escolherPessoa(true)}>💚</button>
                    </div>
                </Janela>
            </HomeContainer>
    )
}