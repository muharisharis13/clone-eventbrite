import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
padding:00px 20px;
height: 70px;
display: flex;
flex-direction: row;
align-items: center;
font-size:11pt
`

export const ImgLogo = styled.img`
object-fit: contain;
max-width: 110px;
`

export const InputSearch = styled.input`
padding-left: 30px;
height: 50px;
border-radius: 0px;
background-color: #f8f7fa;
border:2px solid transparent;
width:60%;
&:focus{
  
background-color: #f8f7fa;

border:2px solid #3d66ff;
}
::placeholder,
  ::-webkit-input-placeholder {
    color: #a9a8b3;

    font-weight: 700;
  }
  :-ms-input-placeholder {
     color: #a9a8b3;

     font-weight: 700;
  }
`

export const ContainerRight = styled.div`
display: flex;
width: 30%;
height: 100% !important;

`

export const ChildOptions1 = styled.div`
position: absolute;
top:70px;
right: 0;
width: 20vw;
padding:0px 0px;
line-height: 50px;
font-size: 11pt;
background-color: #fff;
visibility:${({ show }) => show ? "none" : "hidden"};box-shadow: 2px 5px 5px -3px rgba(0,0,0,0.31);

`

export const ListOptions1 = styled.div`
padding:0px 10px;
cursor: pointer;
:hover{
  background-color: #f8f7fa;
}
`

export const Options1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
cursor: pointer;
padding:0px 10px;
:hover{
  background-color: #f8f7fa;

}
`


export const CreateEvent = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
cursor: pointer;
padding:0px 10px;
:hover{
  background-color: #f8f7fa;

}
`