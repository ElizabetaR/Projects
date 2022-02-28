import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/disney-8k-animation-moana-wallpaper-preview.jpg" />
            </Background>
            <ImageTitle>
                <img src="/images/30a6f3bff5a80ac4e77e03f03e470b26.png" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2016 ‧ Family, Musical, Kids, Animation ‧ 1h 43m
            </SubTitle>
            <Description>
                Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc()(100vh - 70px);
padding: 0 calc()(3.5vw + 5px);
position: relative;
margin-left: 36px;

`
const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
opacity: 0.8;
    img{
        width: 100%;
        height:100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
    
}
`

const Controls = styled.div`
display: flex;
align-items: center;

`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0px 24px;
margin-right: 22px;
display:flex;
align-items: center;
height: 56px;
background-color: rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
cursor:pointer;

&:hover {
    background:rgb(198, 198, 198);
}
`
const TrailerButton = styled(PlayButton)`
margin-left:5px;
background: rgba(0,0,0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
`
const AddButton = styled.button`
margin-right: 16px;
width:44px;
height:40px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}


`
const GroupWatchButton = styled(AddButton)`
background-color:rgba(0,0,0);
`
const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height:20px;
margin-top:26px;

`

const Description = styled.div`
line-height:1.4;
font-size: 20px;
margin-top: 16px;
max-width: 750px;

`