import styled from 'styled-components';


export const Container = styled.div`
overflow: auto;
padding: 0px 150px;
`

export const Background = styled.div`
background-color: #e8e7ed;
height: 70vh;
width: 100%;
top:0;
left: 0;
z-index:-1;
position: absolute;
`

export const InContainer = styled.div`
background-color: #fff;
margin-top: 50px;
border:0.5px solid #ccc;
`

export const Tilte = styled.p`
font-weight:600;
font-size: 15pt;
`

export const BtnFollow = styled.small`
margin:0px 10px;
border: 2px solid blue;
font-size: 8pt;
display: flex;
align-items: center;
justify-content: center;
padding:0px 10px;
color: blue;
font-weight: 700;
border-radius:4px;
cursor: pointer;
`

export const Row2 = styled.section` 
padding:15px 20px;
display: flex;
`

export const ContainerIcon = styled.div`
margin:0px 20px;
`

export const Row2ContainerLeft = styled.div`
display: flex;
font-size: 20pt;
width: 70%;
/* background-color: red; */
`
export const Row2ContainerRight = styled.div`
display: flex;
width: 30%;
/* background-color: red; */
align-items: center;
justify-content: center;
`
export const Row3ContainerLeft = styled.div`
display: flex;
width: 65%;
flex-direction: column;
padding:0px 10px;
/* background-color: red; */
`
export const Row3ContainerRight = styled.div`
display: flex;
width: 33%;
/* background-color: red; */
align-items:baseline;
justify-content: baseline;
flex-direction: column;
`

export const ButtonRegis = styled.div`
background-color: #0e8548;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding:10px 0px;
border-radius:4px;
cursor:pointer;
`

export const Select = styled.select`
width: 100%;
padding: 10px 10px;
`


export const TagsContainer = styled.div`
display: flex;
border: 1px solid #ccc;
justify-content: center;
align-items: center;
padding:2px 10px;
border-radius: 15px;
font-size: 10pt;
font-weight: 600;
margin: 5px 2.5px;
`

export const BtnFollow1 = styled.div`
border: 2px solid blue;
display: flex;
align-items: center;
justify-content: center;
padding:10px 40px;
color:blue;
font-weight: 600;
`
export const BtnContact = styled.div`
border: 2px solid transparent;
display: flex;
align-items: center;
justify-content: center;
padding:10px 40px;
color:blue;
font-weight: 600;
`

export const CardContainer = styled.div`
/* border:1px solid #cccc; */
cursor: pointer;
display: flex;
padding:10px;
flex-direction: column;
transition: 400ms;
margin:15px 0px;
:hover{
  box-shadow: 6px 12px 5px -5px rgba(0,0,0,0.13);
}
`

export const WrapIconLove = styled.div`
display: flex;
align-items: center;
justify-content: center;
border:1px solid #ccc;
width: 40px;
height: 40px;
margin-left:20px;
border-radius: 100%;
`