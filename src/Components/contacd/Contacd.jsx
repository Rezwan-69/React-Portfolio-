import React from 'react'
import "./contacd.css";
import { Container,Row,Col } from 'react-bootstrap';

const Contacd = () => {
  return (
    <div id='contacd'>
        <Container>
    <Row>
        <Col lg={6}>
        <div class="loginfrom">
              <div class="from_box">
               <h4>Let’s work together!</h4>
               <p>I design and code beautifully simple things and i love what i do. Just simple like that!
               </p>
               <div class="input_box ">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last name"/>
               </div>
               <div class="input_box ">
                <input type="email" placeholder="Email Address"/>
                <input type="number" placeholder="Phone Number" maxlength="11"/>
               </div>
               <div class="send_massage_input">
                <input class="massage_input" type="text" placeholder="Message"/>
               </div>
               <button>Send Message</button>
              </div>
            </div>
        </Col>
        <Col lg={{ span: 4, offset: 2 }}>
       <div className="loginfrom2">
        <h6>01786694047</h6>
        <h6>itz.rezwan69@gmail.com</h6>
        <h6>ig get dhaka ,Bangladesh</h6>
        

       </div>
        </Col>

    </Row>
        </Container>

    </div>
  )
}

export default Contacd