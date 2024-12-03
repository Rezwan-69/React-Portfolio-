import React from 'react'
import "./banner.css"
import { Container,Row,Col } from 'react-bootstrap'
import opium from "../../assets/opium.png"

const Banner = () => {
  return (
  <div id="banner">
    <Container>
        <Row>
            <Col lg={6}>
            <h3>I am Rezwan ,</h3>
                    <h2>Web Developer + Digital Marketer</h2>
                    <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                    <div className="d-flex justify-content-between btn_and_link">
                        <button class="cv_btn">Download Cv</button>
                    </div>
            </Col>
            <Col lg={6}>
            <div className="card mx-auto">
                       <img src={opium} alt="" />
                    </div>
            </Col>
        </Row>
        <Row className='d-flex justify-content-between'>
              <div className="s_box text-center">
                <h3>3Year+ </h3>
                <p>experinece</p>
              </div>
              <div className="s_box text-center">
                <h3>80+ </h3>
                <p>projects</p>
              </div>
              <div className="s_box text-center">
                <h3>60+</h3>
                <p>Clints</p>
              </div>
              <div className="s_box text-center">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
        </Row>

    </Container>
  </div>
  )
}

export default Banner