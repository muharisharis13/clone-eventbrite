import React, { useState } from 'react'
import { ChildOptions1, Container, ContainerRight, CreateEvent, ImgLogo, InputSearch, ListOptions1, Options1 } from './style-navbar'
import Logo from '../../assets/logo/logotext.png'
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai"
import { Dropdown } from 'react-bootstrap'

export const Navbar = () => {
  const [org, setOrg] = useState(false)
  const [help, setHelp] = useState(false)
  return (
    <Container className="border" onMouseLeave={() => { setOrg(false); setHelp(false) }}>
      <div style={{ width: "10%" }}>
        <ImgLogo src={Logo} alt="" />
      </div>
      <div onMouseEnter={() => { setOrg(false); setHelp(false) }} style={{ position: "relative", display: "flex", alignItems: "center", width: "60%" }}>
        <AiOutlineSearch style={{ position: "absolute", left: "10px", color: "#a9a8b3", fontSize: "13pt" }} />
        <InputSearch className="form-control" type="text" placeholder="Search Event" id="" />
      </div>
      <ContainerRight>
        <div style={{ position: "relative" }}>
          <Options1 onMouseEnter={() => { setHelp(false); setOrg(true) }}  >
            Organize <AiOutlineDown />
          </Options1>
          <ChildOptions1 show={org} className="border" onMouseEnter={() => setOrg(true)}>
            <ListOptions1>
              Why Eventbrite
            </ListOptions1>
            <ListOptions1>
              Pricing
            </ListOptions1>
            <ListOptions1>
              Recouces
            </ListOptions1>
          </ChildOptions1>
        </div>
        <div style={{ position: "relative" }}>
          <Options1 onMouseEnter={() => { setHelp(true); setOrg(false) }}  >
            Help <AiOutlineDown />
          </Options1>
          <ChildOptions1 show={help} className="border" onMouseEnter={() => setHelp(true)}>
            <ListOptions1>
              Find Your Tickets
            </ListOptions1>
            <ListOptions1>
              Contact An Event Organizer
            </ListOptions1>
            <ListOptions1>
              Visit The Help Center
            </ListOptions1>
          </ChildOptions1>
        </div>
        <CreateEvent onMouseEnter={() => { setOrg(false); setHelp(false) }}>Create an event</CreateEvent>
        <CreateEvent>Sign In</CreateEvent>
      </ContainerRight>
    </Container>
  )
}

