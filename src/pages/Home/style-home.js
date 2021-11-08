import styled from "styled-components";


export const Hero = styled.div`
max-width: 100%;
width: 100%;
height: 60vh;
background:url("https://eventbrite-s3.s3.amazonaws.com/marketing/homepage/Daybreaker_tablet_1067x470.jpg"); 
background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
align-items: start;
justify-content: center;
display: flex;
flex-direction: column;
color:#fff;
padding:0px 100px
`

export const TitleHero = styled.h1`
font-weight: 750;
font-size: 75px;
`

export const ButtonHero = styled.div`
background-color: #d1410c;
color:#fff;
cursor: pointer;
padding:11px 10px;
border:1px solid #d1410c;
border-radius: 7px;
font-weight:600;
font-size: 11pt;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

`


export const ContainerCard = styled.div`
border-left: 4px solid #d1410c;
background-color: #fff; 
padding-left: 20px;
border-radius:4px;
box-shadow: 0 4px 12px -4px rgb(46 55 77 / 12%);
padding: 14px 24px;
font-size: 9.6pt;
`

export const BrowseLocation = styled.h2`
display: flex;
font-weight:800
`

export const InputBrowse = styled.input`
border: none;
text-decoration: underline;
  text-decoration-color: #dbdae3;
  text-decoration-thickness: 2px;
color: #3659e3;
font-weight: 800;

text-underline-offset: 4px;
:focus{
  outline: none;
border:none;
}

::placeholder,
  ::-webkit-input-placeholder {
    color: #a9a8b3;
  }
  :-ms-input-placeholder {
     color: #a9a8b3;

  }
`

export const NavsTab = styled.div`
display: flex;
`

export const NavsTabText = styled.p`
margin:0px 10px;
cursor: pointer;
padding-bottom: 10px;

color: ${({ show }) => show ? "#3659e3" : "#a9a8b3"};
border-bottom: ${({ show }) => show ? "2px solid #3659e3" : "2px solid transparent"};
:hover{

  color: #000;
  border-bottom: 2px solid #3659e3;
}
`

export const Containercard = styled.div`
display: flex;
flex-wrap: wrap;
width: 75%;
`
export const ContainercardRight = styled.div`
display: flex;
flex-direction: column;
padding:30px;
height: 420px;
background:url("https://cdn.evbstatic.com/s3-build/perm_001/ad8d44/django/images/onboarding/desktop_entry_2.jpg");
max-width: 25%;
background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
margin: 20px 0px;
width: 100%;
background-color: #ecdce6;
`

export const ImgCard = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
`
export const CardWrapper111 = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 20px 10px;
width: 19vw;
background-color: #fff;
box-shadow: 0px 32px 61px 0px rgba(0,0,0,0.04);
cursor: pointer;
transition: 400ms;
:hover{
  box-shadow: 0px 32px 61px -30px rgba(0,0,0,0.47);
}
`

export const ContainerIconLove = styled.div`
padding:0;
position:absolute; 
bottom:-12%;
cursor: pointer;
right:10px;
background-color: #fff;
border:1px solid #ccc;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
`

export const ContainerSold = styled.div`
padding:0;
position:absolute; 
top:-10px;
cursor: pointer;
right:-10px;
background-color: #6f7287;
border: 2px solid #fff;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
font-size:9pt;
font-weight: 700;
padding:2px 5px;
`

export const BtnSeeMore = styled.div`
border: 2px solid #a9a8b3;
background-color: transparent;
padding:7px 200px;
font-size:11pt;
font-weight: 600;
border-radius: 4px;
color:#a9a8b3;
cursor: pointer;
`
