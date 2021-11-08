import React, { useState } from 'react'
import { Background, BtnContact, BtnFollow, BtnFollow1, ButtonRegis, CardContainer, Container, ContainerIcon, InContainer, Row2, Row2ContainerLeft, Row2ContainerRight, Row3ContainerLeft, Row3ContainerRight, Select, TagsContainer, Tilte, WrapIconLove } from './style'
import { AiOutlineUpload } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaUpload } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { FooterHome } from '../../component/footer/footerhome/footer'
import { ModalDetails } from "../../component/modal/details/modal.details"

export const Details = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <ModalDetails show={show} onHide={() => setShow(!show)} />
      <Container>
        <Background></Background>
        <InContainer>
          <div>
            <section style={{ padding: "30px 120px" }}>

              <div>
                Nov <br />
                14
              </div>
              <div style={{ marginTop: "70px", display: "flex", width: "100%", flexDirection: "column" }}>
                <div>
                  <Tilte>
                    Free Meditation in Chinese ~ Weekly Classes: Let's Meditate Medan
                  </Tilte>

                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", width: "75%", flexDirection: "column" }}>
                    <small>by Free Meditation in Chinese</small>
                    <div style={{ display: "flex" }}>
                      <small>420 Followers</small>
                      <BtnFollow>Follow</BtnFollow>
                    </div>
                  </div>
                  <div style={{ display: "flex", width: "25%" }}>
                    Free
                  </div>

                </div>



              </div>
            </section>

            <Row2 className="border">
              <Row2ContainerLeft>
                <ContainerIcon>
                  <AiOutlineUpload cursor="pointer" />
                </ContainerIcon>
                <ContainerIcon>
                  <GiSelfLove cursor="pointer" />
                </ContainerIcon>
              </Row2ContainerLeft>
              <Row2ContainerRight>
                <ButtonRegis onClick={() => setShow(!show)}>
                  Register
                </ButtonRegis>
              </Row2ContainerRight>
            </Row2>

            <section style={{ paddingLeft: "120px", marginTop: "30px", display: "flex", paddingRight: "2%", }}>
              <Row3ContainerLeft>
                <div>
                  <strong>Mandarin Online Guided Meditation: Free Weekly Classes. Experience the healing power of Meditation. No prior experience is needed.</strong>
                </div>
                <div style={{ margin: "20px 0px" }}>
                  <h5>About this event</h5>
                </div>

                <div>
                  <p style={{ fontSize: "11pt", color: "#7d7d8b" }}>
                    Meditate, meet and get motivated. <br /><br />

                    Meditation that you can use. Meditate for spiritual awakening, stress care, personal development, health... <br /><br />

                    公益，瑜伽，冥想，寻找志同道合的朋友，追求身心灵的健康！<br /><br />

                    冥想对你的帮助：唤醒我们内在潜能，提高我们身体的机能，减压，个人情绪管理和自我激励，发现更好的自己！<br /><br />

                    How to join? <br /><br />

                    Please click on the below zoom link to join the session <br /><br />

                    https://zoom.us/j/9700172269?pwd=Y2xQT0NhT1Rtak16Z3pTaFQ1Y1Q2QT09 <br /><br />

                    如何加入我们？<br /><br />

                    点击这个链接，加入ZOOM就可以参与我们的在线课堂！<br /><br />

                    We recommend joining by laptop for a better experience. All levels are welcome. <br /><br />

                    You will find the experience of this online class very real lifelike and in fact more attentive and personal <br /><br />

                    如果方便的话，请使用电脑参与课程，以便获得更好的课堂体验！<br /><br />

                    在这个课堂上你会有更真实的体验，以及你自己身心的变化！<br /><br />

                    这是零基础课程，适合所有的朋友参与！<br /><br />

                    Facebook for more resources- more live events, recorded sessions, self-learning units, mentorship, downloads..... Join now! <br /><br />

                    https://www.facebook.com/Sahaja-Yoga-Chinese-%E5%86%A5%E6%83%B3-Free-Meditation-Classes-103805825318856 <br /><br />

                    脸书上的更多资源：在线的活动，课程回放，自我学习的资料，瑜伽冥想及相关指导视频，下载资料，点击链接，加入我们吧！ <br /><br />

                    what you will learn from this class <br /><br />

                    1. Learn how to meditate at home <br /><br />

                    2. Learn best practices and techniques <br /><br />

                    3. Experience the 'awakening' of healing energy within us that gives peace and balance<br /><br />

                    4. Sahaja Yoga meditation toolkit resources to apply techniques learned in daily life<br /><br />

                    在这堂课程中，你将学习到：<br /><br />

                    1 学习如何自己在家冥想<br /><br />

                    2 瑜伽实践与体验，学习相关的知识与技巧<br /><br />

                    3 体验我们内在觉醒的治愈力量，带来内在的平安和平衡<br /><br />

                    4 如何把在霎哈嘉瑜伽冥想中学到的方法运用到我们日常的生活中<br /><br />
                  </p>
                </div>

                <div>
                  Tags
                </div>

                <div style={{ margin: "40px 0px", display: "flex", flexWrap: "wrap" }}>
                  {
                    [2, 2, 2, 2, 2].map(() => (
                      <TagsContainer>Indonesian event</TagsContainer>

                    ))
                  }
                </div>

                <div style={{ paddingBottom: "40px" }}>
                  <p>Share with friends</p>
                  <div style={{ display: "flex", justifyContent: "space-between", width: "30%", fontSize: "17pt" }}>
                    <FaFacebookF />
                    <FiMessageCircle />
                    <FaLinkedinIn />
                    <FaTwitter />
                    <FaEnvelope />
                  </div>
                </div>
              </Row3ContainerLeft>
              <Row3ContainerRight>
                <div>
                  <p>Date and Time</p>
                  <p>
                    Sun, November 14, 2021 6:30 AM – 7:30 AM Indochina Time Thailand Time
                  </p>
                </div>
                <div>
                  <a href="">Add to calendar</a>
                </div>

                <div style={{ margin: "30px 0px", width: "100%" }}>
                  <Select>
                    <option value="">Select a different date.</option>
                    <option value="">Sun, Nov 15 (16:00)</option>
                  </Select>
                </div>

                <div >
                  <small>Location</small> <br />
                  <small>
                    Online-Zoom https://zoom.us/j/9700172269?pwd=Y2xQT0NhT1Rtak16Z3pTaFQ1Y1Q2QT37 Medan, Medan
                  </small> <br />
                  <a href="">View Map</a>
                </div>
              </Row3ContainerRight>
            </section>

          </div>


          <div className="border-top container">
            <div className="container">
              <div style={{ marginTop: "50px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144087869%2F27237085257%2F1%2Foriginal.20210810-100959?w=300&auto=format%2Ccompress&q=75&sharp=10&s=64d03db09e533ccb2bd97a3caa139ef3" alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }} />

                <div style={{ margin: "20px 0px" }}>
                  <p>Free Meditation In Chinese</p>
                </div>
                <div>
                  <small>Organizer of Free Meditation in Chinese ~ Weekly Classes: Let's Meditate Medan</small>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <p style={{ fontSize: "10pt", color: "#6f7287" }}>
                    Meditate, meet and get motivated. <br /><br />

                    Meditation that you can use. Meditate for spiritual awakening, stress care, personal development, health...<br /><br />

                    公益，瑜伽，冥想，寻找志同道合的朋友，追求身心灵的健康！<br /><br />

                    冥想对你的帮助：唤醒我们内在潜能，提高我们身体的机能，减压，个人情绪管理和自我激励，发现更好的自己！<br /><br />

                    How to join?<br /><br />

                    Please click on the below zoom link to join the session<br /><br />

                    https://zoom.us/j/9700172269?pwd=Y2xQT0NhT1Rtak16Z3pTaFQ1Y1Q2QT09<br /><br />

                    如何加入我们？<br /><br />

                    点击这个链接，加入ZOOM就可以参与我们的在线课堂！<br /><br />

                    We recommend joining by laptop for a better experience. All levels are welcome.<br /><br />

                    You will find the experience of this online class very real lifelike and in fact more attentive and personal<br /><br />

                    如果方便的话，请使用电脑参与课程，以便获得更好的课堂体验！<br /><br />

                    在这个课堂上你会有更真实的体验，以及你自己身心的变化！<br /><br />

                    这是零基础课程，适合所有的朋友参与！<br /><br />

                    Facebook for more resources- more live events, recorded sessions, self-learning units, mentorship, downloads..... Join now!<br /><br />

                    https://www.facebook.com/Sahaja-Yoga-Chinese-%E5%86%A5%E6%83%B3-Free-Meditation-Classes-103805825318856<br /><br />

                    脸书上的更多资源：在线的活动，课程回放，自我学习的资料，瑜伽冥想及相关指导视频，下载资料，点击链接，加入我们吧！<br /><br />

                    what you will learn from this class<br /><br />

                    1. Learn how to meditate at home<br /><br />

                    2. Learn best practices and techniques<br /><br />

                    3. Experience the 'awakening' of healing energy within us that gives peace and balance<br /><br />

                    4. Sahaja Yoga meditation toolkit resources to apply techniques learned in daily life<br /><br />

                    在这堂课程中，你将学习到：<br /><br />

                    1 学习如何自己在家冥想<br /><br />

                    2 瑜伽实践与体验，学习相关的知识与技巧<br /><br />

                    3 体验我们内在觉醒的治愈力量，带来内在的平安和平衡<br /><br />

                    4 如何把在霎哈嘉瑜伽冥想中学到的方法运用到我们日常的生活中<br /><br />
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <BtnFollow1>Follow</BtnFollow1>
                  <BtnContact>Contact</BtnContact>
                </div>

                <div style={{ margin: "40px 0px" }}>
                  <h4>More events from this organizer</h4>
                </div>

                <div>
                  {
                    [3, 3, 3, 3].map(() => (
                      <CardContainer>
                        <div style={{ display: "flex" }}>
                          <div style={{ flexDirection: "column", display: "flex", flexWrap: "wrap", paddingRight: "50px" }}>
                            <h6>
                              Free Meditation in Chinese ~ Weekly Classes: <br /> Let's Meditate Bangkok</h6>
                            <small>
                              Sun, Nov 14, 6:30 AM
                            </small>
                            <small>
                              Online-Zoom • Bangkok
                            </small>

                          </div>
                          <div>
                            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144087869%2F27237085257%2F1%2Foriginal.20210810-100959?w=300&auto=format%2Ccompress&q=75&sharp=10&s=64d03db09e533ccb2bd97a3caa139ef3" style={{ width: "200px", height: "100px", objectFit: "cover" }} alt="" />
                          </div>

                        </div>
                        <div>
                          Free
                        </div>

                        <div>
                          <small>Free Meditation in Chinese</small>
                        </div>

                        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            420 Follower
                          </div>
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div>
                              <FaUpload />
                            </div>
                            <WrapIconLove>
                              <GiSelfLove />
                            </WrapIconLove>
                          </div>
                        </div>
                      </CardContainer>

                    ))
                  }
                </div>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "100px" }}>
                  <strong>Free Meditation in Chinese ~ Weekly Classes: Let's Meditate Medan</strong>
                  <small>at</small>

                  <strong>
                    Online-Zoom
                  </strong>

                  <small>
                    https://zoom.us/j/9700172269?pwd=Y2xQT0NhT1Rtak16Z3pTaFQ1Y1Q2QT37, Medan, Medan
                  </small>
                </div>
              </div>
            </div>
          </div>
        </InContainer>


      </Container>
      <div style={{ marginTop: "100px" }}>
        <FooterHome />
      </div>

    </div>
  )
}
