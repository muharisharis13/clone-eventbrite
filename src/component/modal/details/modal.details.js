import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { ButtonRegis, Select } from '../../../pages/detail/style'
import { ButtonHero } from '../../../pages/Home/style-home'
import { Container, ContainerLeft, ContainerRight, Img, WrapperIcon } from './style'

export const ModalDetails = ({ show, onHide }) => {


  return (
    <Modal show={show} onHide={onHide} size="xl" >
      <Modal.Body style={{ padding: "0px !important" }}>
        <Container>
          <ContainerLeft>
            <div className="border-bottom" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "10px", padding: "0px 0px" }}>
              <strong>Free Meditation in Chinese ~ Weekly Classes: Let's Meditate Medan</strong><br />
              <small>Sun, Nov 14, 2021 6:30 AM - 7:30 AM +07</small>
            </div>
            <div className="container border-bottom" style={{ marginTop: "50px", padding: "0px 50px", display: "flex", width: "100%", justifyContent: "space-between", paddingBottom: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h6>Ticket for Mandarin Meditation Classes</h6>
                <small>Free</small>
                <small>Sales end on Nov 14, 2021</small>
              </div>
              <div style={{ width: "12%" }}>
                <Select>
                  <option>1</option>
                  <option>2</option>
                </Select>
              </div>
            </div>

            <div style={{ margin: "50px 0px", padding: "0px 50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <small>Powered by <strong>eventbrite</strong></small>
              </div>
              <div>
                <Select>
                  <option>English (US)</option>
                  <option>Bahasa Indonesia</option>
                </Select>
              </div>
            </div>


            <div className="border-top" style={{ marginTop: "220px", display: "flex", justifyContent: "flex-end", alignItems: "end", padding: "0px 50px", paddingTop: "10px" }}>
              <ButtonHero>Register</ButtonHero>
            </div>
          </ContainerLeft>
          <ContainerRight>
            <div style={{ position: "relative" }}>
              <Img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144087869%2F27237085257%2F1%2Foriginal.20210810-100959?w=300&auto=format%2Ccompress&q=75&sharp=10&s=64d03db09e533ccb2bd97a3caa139ef3" />

              <WrapperIcon onClick={onHide}>
                <FaTimes />
              </WrapperIcon>
            </div>

            <div style={{ padding: "5px 20px" }}>
              <div>
                <small>Order summary</small>
              </div>
              <div className="border-bottom" style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", paddingBottom: "10px" }}>
                <small>1 x Ticket for Mandarin Meditation Classes</small>
                <small>$0.00</small>
              </div>

              <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", paddingBottom: "10px" }}>
                <strong>Total</strong>
                <div> $0.00</div>
              </div>
            </div>
          </ContainerRight>
        </Container>
      </Modal.Body>
    </Modal>
  )
}
