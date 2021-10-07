import React from "react"
import styled from "styled-components"

const MainContainer = styled.div`
display: flex;
border: 2px solid red;
width: 470px;
padding: 10px 20px;
margin: 10px 40vw;
height: 500px;
align-items: center;
justify-content: center;
`
const JanelaProfiles = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 400px;
margin-bottom: 20px;
h2{
    padding: 10px;
}
img{
    width: 70px;
    border-radius: 70px;
    margin-right: 25px;
    padding: 10px;
}
`
const JanelaItens = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: 2px solid red;
margin-top: 20px;
`

export const MatchesPage = () => {
    return(
        <MainContainer>
                <JanelaProfiles>
                    <JanelaItens>
                        <img src="https://s2.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"></img>
                        <h2>Nome Pessoa</h2>
                    </JanelaItens>
                    <JanelaItens>
                        <img src="https://s2.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"></img>
                        <h2>Nome Pessoa</h2>
                    </JanelaItens>
                    <JanelaItens>
                        <img src="https://s2.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"></img>
                        <h2>Nome Pessoa</h2>
                    </JanelaItens>
                    <JanelaItens>
                        <img src="https://s2.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg"></img>
                        <h2>Nome Pessoa</h2>
                    </JanelaItens>
                </JanelaProfiles>
            </MainContainer>
    )
}