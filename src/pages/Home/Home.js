import React, { useState } from 'react'
import { BrowseLocation, BtnSeeMore, ButtonHero, CardWrapper111, Containercard, ContainerCard, ContainercardRight, ContainerIconLove, ContainerSold, Hero, ImgCard, InputBrowse, LineNavsTabTextine, NavsTab, NavsTabText, TitleHero } from './style-home'
import { AiOutlineDown } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { HiOutlineUsers } from 'react-icons/hi'
import { FooterHome } from '../../component/footer/footerhome/footer';
import { Link } from 'react-router-dom';

const dataNav = [
  {
    text: "All",
    show: true
  },
  {
    text: "For You",
    show: false
  },
  {
    text: "Online",
    show: false
  },
  {
    text: "Today",
    show: false
  },
  {
    text: "This Weekend",
    show: false
  },
  {
    text: "Veteran's Day",
    show: false
  },
  {
    text: "ThanksGiving",
    show: false
  },
  {
    text: "Free",
    show: false
  },
  {
    text: "Music",
    show: false
  },
  {
    text: "Food & Drink",
    show: false
  },
  {
    text: "Charity & Causes",
    show: false
  }
]

export const Home = () => {
  const [placeholderBrowse, setplaceholderBrowse] = useState("Medan");
  const [nav, setNav] = useState(dataNav)
  return (
    <div >
      <Hero>
        <TitleHero>
          NOW IS <br />
          YOUR TIME
        </TitleHero>
        <ButtonHero>
          Find your next event
        </ButtonHero>
      </Hero>

      <section className="container-fluid" style={{ marginTop: "20px", padding: "0px 90px", paddingBottom: "100px" }}>
        <section>
          <ContainerCard>
            <strong style={{ fontSize: "12pt" }}>
              Re-open confidently with Eventbrite’s COVID-19 Safety Playbook
            </strong>
            <p>
              We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event. <a href="#">See the playbook</a>.
            </p>
          </ContainerCard>
        </section>

        <section style={{ marginTop: "50px" }}>
          <BrowseLocation>
            <strong> Popular in</strong>
            <div>
              <AiOutlineDown />
              <InputBrowse type="text" placeholder={placeholderBrowse} />
            </div>
          </BrowseLocation>
        </section>

        <section style={{ marginTop: '20px' }}>
          <NavsTab>
            {
              nav.map((item, index) => (
                <NavsTabText show={item.show} key={index}>
                  {item.text}
                </NavsTabText>

              ))
            }
          </NavsTab>
        </section>

        <section style={{ margin: "50px 0px" }}>
          <strong style={{ fontSize: "18pt" }}>Event in {placeholderBrowse}</strong>
        </section>

        <section style={{ display: "flex" }}>
          <Containercard>
            {
              [1, 2, 3, 4].map((item, index) => (
                <Link to={{ pathname: `/details/${index}` }} style={{ textDecoration: "none", color: "#000" }}>
                  <CardWrapper111 key={index}>
                    <div style={{ position: "relative" }}>
                      <ImgCard src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F144087869%2F27237085257%2F1%2Foriginal.20210810-100959?w=300&auto=format%2Ccompress&q=75&sharp=10&s=64d03db09e533ccb2bd97a3caa139ef3" alt="card" />

                      <ContainerSold>
                        Sales Ended
                      </ContainerSold>
                      <ContainerIconLove>
                        <GiSelfLove />
                      </ContainerIconLove>
                    </div>
                    <div style={{ padding: "0px 15px", marginTop: "22px", paddingBottom: "20px", flexDirection: "column", display: "flex" }}>
                      <strong style={{ marginBottom: "7px" }}>
                        Free Meditation in Chinese ~ Weekly Classes: Let's Meditate Medan
                      </strong>
                      <small style={{ marginBottom: "7px", color: "#f15b3e", fontWeight: "700" }}>
                        Sun, Nov 14, 6:30 AM + 11 more events
                      </small>
                      <small style={{ marginBottom: "7px", fontWeight: "600", color: "#9093a3" }}>
                        Online-Zoom • Medan, Medan Free
                      </small>
                      <small style={{ marginBottom: "7px", fontWeight: "600", color: "#514e64" }}>
                        Free Meditation in Chinese
                      </small>
                      <small style={{ marginBottom: "7px", fontWeight: "600", color: "#514e64" }}>
                        <HiOutlineUsers /> 419 followers
                      </small>

                    </div>
                  </CardWrapper111>
                </Link>

              ))
            }

          </Containercard>
          <ContainercardRight>
            <strong>
              Tell us what you love
            </strong>
            <small>
              We'll find event recomendations just for you
            </small>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <ButtonHero>Get Started</ButtonHero>
            </div>
          </ContainercardRight>

        </section>

        <section style={{ marginTop: "50px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BtnSeeMore>See More</BtnSeeMore>
        </section>

      </section>

      <section>
        <FooterHome />
      </section>
    </div >
  )
}
