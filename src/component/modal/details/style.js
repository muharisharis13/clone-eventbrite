import styled from 'styled-components'


export const Container = styled.div`
display: flex;
width: 100%;
`

export const ContainerLeft = styled.div`
width:70%;
padding:10px;
`

export const ContainerRight = styled.div`
width: 30%;
background-color: #888c8c;
`

export const Img = styled.img`
width: 100%;
object-fit:cover;
height: 250px;
`

export const WrapperIcon = styled.div`
background:#fff;
position:absolute;
width: 40px;
height: 40px;
display:flex;
justify-content: center;
align-items: center;
border-radius:100%;
top:5px;
right:5px;
cursor:pointer;
`