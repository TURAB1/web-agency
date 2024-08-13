import React from 'react';
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/designs/design-3.PNG";
import "../../styles/about-section.css"


const AboutSection = ({ aboutClass }) => {
  return (
    // <section
    //   className="about__section"
    //   style={
    //     aboutClass === "aboutPage"
    //       ? { marginTop: "0px" }
    //       : { marginTop: "280px" }
    //   }
    // >
      <Container className='about__section__container'>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Magistrae Engineering Group Ltd</h2>
              <p className="section__description">
               we are a group of experienced engineers dedicated to providing you quality services.
               Our services mainly include Building Architechture,construction consulting GIS and Mapping.
               Magistrae has been in action since 2021 and we aim at becoming one of best construction companies nationwide and globally by 2030
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Swift service.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Customer satisfaction.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Honesty.            
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Durable construction.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    // </section>
  );
};

export default AboutSection;