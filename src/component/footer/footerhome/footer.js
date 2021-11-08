import React from 'react'
import { ALink, ALink2, Container } from './style'


const row1 = [
  "How It Works",
  "For Large & Complex Events",
  "Pricing",
  "Content Standards",
  "Eventbrite Mobile Ticket App",
  "Eventbrite Check-In App",
  "Eventbrite App Marketplace",
  "COVID-19 (Coronavirus) Resources",
  "FAQs",
  "Sitemap"
]

const row2 = [
  "About",
  "Blog",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
  "Help",
]

export const FooterHome = () => {
  return (
    <Container>
      <section style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "25px" }}>
        {
          [1, 2, 3, 4].map((item, idx) => (
            <div key={idx} style={{ width: "100%/4", display: "flex", flexDirection: "column" }}>
              <div>
                <strong>Use Eventbrite</strong>

              </div>
              <div style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                {
                  row1.map((item, index) => (

                    <ALink href="#" key={index}>{item}</ALink>
                  ))
                }
              </div>
            </div>

          ))
        }

      </section>

      <section style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <div style={{ display: "flex", width: "100%/3" }}>
          <small>© 2021 Eventbrite</small>
        </div>
        <div style={{ display: "flex", width: "100%/3", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          {
            row2.map((item, index) => (
              <ALink2 key={index}>{item} .</ALink2>
            ))
          }
        </div>
        <div style={{ display: "flex", width: "100%/3" }}>
          bahasa
        </div>
      </section>

    </Container>
  )
}
