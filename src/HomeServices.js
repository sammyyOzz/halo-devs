import React from 'react'
import './HomeServices.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mobile from './images/65680.png'
import uiUx from './images/ui-ux-698382.png'
import projectManagement from './images/1087902.png'
import webDev from './images/web-development-icon-png-clipart-website-development-web-dev-icon-11562967383vhxlfmnerz.png'


function HomeServices() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 610 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 610, min: 0 },
          items: 1
        }
      };
    return (
        <div className="homeServices">
            <h3 id="homeServices__ourServices">Our Services</h3>
            <h2 id="homeServices__ourServicesII">What do we do ?</h2>
            <div className="homeServices__carousel">
              <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  // customTransition="all .5"
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  // centerMode={true}
              >
                  {/* Item One */}
                  <div className="homeServices__card">
                    <div className="homeServices__cardIcon">
                      <img src={mobile} alt=""/>
                    </div>
                    <h2>Mobile development</h2>
                    <p>
                      Android, IOS and cross-platform solutions, you name it. we can help you build or update and make your web application a mobile experience. that your uses would love.                     
                    </p>
                  </div>

                  {/* Item Two */}
                  <div className="homeServices__card">
                    <div className="homeServices__cardIcon">
                      <img src={uiUx} alt=""/>
                    </div>
                    <h2>UI/UX</h2>
                    <p>
                      In web and mobile design, form and function should be in harmony. we believe in human-centered customer experience across any ecosystem of digital product beign developed.                    
                    </p>
                  </div>

                  {/* Item Three */}
                  <div className="homeServices__card">
                    <div className="homeServices__cardIcon">
                      <img src={projectManagement} alt=""/>
                    </div>
                    <h2>Project management</h2>
                    <p>
                      Ranging from dashboards to school portals, Our team can build it all.       
                    </p>
                  </div>

                  {/* Item Four */}
                  <div className="homeServices__card">
                    <div className="homeServices__cardIcon">
                      <img src={webDev} alt=""/>
                    </div>
                    <h2>Web development</h2>
                    <p>
                      From enterprise applications to CMS powered websites, Our web developers can write, modular, well-documented, responsive code effectively and efficiently in a diverse array of stacks.                    
                    </p>
                  </div>

              </Carousel>
            </div>
        </div>
    )
}

export default HomeServices
