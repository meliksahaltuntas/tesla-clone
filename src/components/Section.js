import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap style={{ backgroundImage: `url(${props.BackgroundImg})` }}>
            <Fade bottom >
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>

                <Fade bottom >
                    <ButtonGroup>
                        <LeftButton>
                        {props.leftBtnText}
                        </LeftButton>
                        <RightButton>{props.rightBtnText}</RightButton>

                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />

            </Buttons>



        </Wrap>
    )
}

export default Section

const Wrap = styled.div`


width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;


`
const Buttons = styled.div`

`

const ButtonGroup = styled.div`
margin-bottom:30px;
display:flex;
@media (max-width:768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.9;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:10px;



`

const DownArrow = styled.img`
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
position: relative;
left: 16rem;
@media (max-width:768px){
    position: relative;
    left: 7rem;
}


`


const RightButton = styled(LeftButton)`
background:white;
opacity:0.9;
color:black;`