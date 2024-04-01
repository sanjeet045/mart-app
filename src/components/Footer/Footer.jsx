import React from 'react'
import './footer.css'
import { Container, Row,  Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import logo from '../../assets/images/eco-logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear()
  
  
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="4" className='mb-4' md='6'>
          <div className="logo">
          <img src= {logo} alt="logo" />
            <div>
              <h1 className='text-white'>mart</h1>
              <p>since 1994</p>
            </div>
          </div>
           <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatibus, reprehenderit soluta corrupti qui libero repellendus est explicabo fugiat nesciunt.
            </p>
        </Col>
        
        <Col lg="3" md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup className='mb-3 '>
              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='#'>Modern Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        
        <Col lg="2" md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='/cart'>cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='/login'>login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        
        <Col lg="3" md='4'>
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Contact</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 back d-flex align-item-center gap-2'>
                <span><i className='ri-map-pin-line'/></span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back d-flex align-item-center gap-2 '>
                <span><i className='ri-phone-line'/></span>
                <p>+91123456789</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 back d-flex align-item-center gap-2'>
              <span><i className='ri-mail-line'/></span>
                <p>sanjeetsingh5148@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer__copyright">Copyrights {year} developed by sanjeet kr singh.
          All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
