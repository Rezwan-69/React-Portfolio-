import React from 'react'
import './about.css'
import { Container,Row,Col } from 'react-bootstrap'
import Figma from "../../assets/figma.png"
import Api from "../../assets/api.png"
import Js from "../../assets/js.png"
import react from "../../assets/react.png"
import Laravel from "../../assets/laravel.png"
import Frame_work from "../../assets/frame_work.png"

const About = () => {
  return (
    <div id='about'>
            <Container>
                <Row>
                    <Col>
                    <h4 class="text-center">About Me</h4>
            <h3>I am Rezwan Mahmud Utso,</h3>
            <p>I’m  a font-end- Developer And Back-end-Developer .My Programing Language is (html , css , Java script , Reeact js , React Redux , Next JS)   (JavaScript , OOP PHP , Raw PHP & MySQL Database , Laravel CRUD ,  Laravel Vue API ) . I’m excited to make the leap and continue refining My Skills with The right  Company.</p>
                    </Col>
                </Row >

                <Row>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={Figma} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={Js} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={react} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={Laravel} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={Api} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                <Col lg={2}>
                <div className="mini_card">
            <div className="box_mini">
              <img src={Frame_work} alt="" />
            </div>
            <h5 className="text-center">Figma</h5>
          </div>
                </Col>
                    
                </Row>
            </Container>

    </div>
  )
}

export default About