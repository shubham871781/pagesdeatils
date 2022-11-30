
function App() {
  return (
    <div>
      <section id="banner" className="banner">
        <div className="bg-color">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="col-md-12">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#banner"><img src="assets/img/Updated_logo@2x.png" className="img-responsive logoimge" alt="" /></a>
                </div>
                <div className="collapse navbar-collapse navbar-right" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#banner">Home</a></li>
                    <li className=""><a href="#about">About</a></li>
                    <li className=""><a href="#service">Services</a></li>
                    <li className=""><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="banner-info">
                <div className="banner-text text-center">
                  <h1 className="white">Book & play!!</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#contact" className="btn btn-appoint">Make an Appointment.</a>
                </div>
                <div className="overlay-detail text-center">
                  <a href="#about"><i className="fa fa-angle-down"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="section-padding sss" >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="service-info">
                <div className="icon text-white1">
                  <i className="fa fa-search text-white1"></i>
                </div>
                <div className="icon-info">
                  <h4 className="text-white1">Search</h4>
                  <p className="text-white1">Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the India.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-info">
                <div className="icon text-white1">
                  <i className="fa fa-address-book-o "></i>
                </div>
                <div className="icon-info">
                  <h4 className="text-white1">Book</h4>
                  <p className="text-white1">Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-info">
                <div className="icon text-white1">
                  <i className="fa fa-futbol-o"></i>
                </div>
                <div className="icon-info">
                  <h4 className="text-white1">Play</h4>
                  <p className="text-white1">You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section-padding about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="section-title">
                <h4 className="aboutclass">Meet Your Pals Over Game</h4>
                <p className="sec-para"><p>Want to play games ?<br />But don't get an opponent team?<br />
                  You can Invite a team or Join a pre scheduled match Through Playspots</p>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div style={{ visibility: "visible" }} className="col-sm-9 more-features-box">
                <img src="assets/img/meet-pals.png" className="img-responsive1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="playcoins-sec">
        <div className="playcoin-left-wrap">
          <div className="container-fluid">
            <div className="row row-eq-height">
              <div className="col-md-6">
                <div className="text-sec wow  fadeIn slow animated" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pd-none">
          <div className="row row-eq-height">
            <div className="col-md-6 d-none d-md-block">
              <div className="text-sec">
                <div className="d-none">
                  <h3 className="ltr-space wow animated fadeInUp slow animated" style={{ visibility: "visible", animationName: "fadeInUp" }}>Play More, Pay Less !</h3>
                  <h1 className="section-title ltr-space wow animated fadeInUp slow animated" style={{ visibility: "visible", animationName: "fadeInUp" }}>COUPON</h1>
                  <div className="content">A digital wallet system with redeemable reward points</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-sec">
                <div className="img-wrap">
                  <img src="assets/img/1af568c3-6d4e-44f3-b461-4d8ba254b6e7.jpg" className="img-fluid wow  fadeInUp slow animated" alt="" style={{ visibility: "visible", animationName: "fadeInUp" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!--cta-->
      <!--contact--> */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Contact us</h2>
              <hr className="botm-line" />
            </div>
            <div className="col-md-4 col-sm-4">
              <h3>Contact Info</h3>
              <div className="space"></div>
              <p><i className="fa fa-map-marker fa-fw pull-left fa-2x"></i>Near Spna Sangeeta<br /> indore, 452001</p>
              <div className="space"></div>
              <p><i className="fa fa-envelope-o fa-fw pull-left fa-2x"></i>imshubhamporwal@gmail.com</p>
              <div className="space"></div>
              <p><i className="fa fa-phone fa-fw pull-left fa-2x"></i>+91 871-781-2863</p>
            </div>
            <div className="col-md-8 col-sm-8 marb20">
              <div className="contact-info">
                <h3 className="cnt-ttl">Having Any Query! Or Book an appointment</h3>
                <div className="space"></div>
                <div id="sendmessage">Your message has been sent. Thank you!</div>
                <div id="errormessage"></div>
                <form action="" method="post" className="contactForm">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control br-radius-zero" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control br-radius-zero" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control br-radius-zero" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control br-radius-zero" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validation"></div>
                  </div>
                  <div className="form-action">
                    <button type="submit" className="btn btn-form">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--/ contact-->
      <!--footer--> */}
      <footer id="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">About Us</h4>
                </div>
                <div className="info-sec">
                  <p>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Links</h4>
                </div>
                <div className="info-sec">
                  <ul className="quick-info">
                    <li><a href="#banner"><i className="fa fa-circle"></i>Home</a></li>
                    <li><a href="#about"><i className="fa fa-circle"></i>About</a></li>
                    <li><a href="#service"><i className="fa fa-circle"></i>Service</a></li>
                    <li><a href="#contact"><i className="fa fa-circle"></i>Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Follow us</h4>
                </div>
                <div className="info-sec">
                  <ul className="social-icon">
                    <li className="bglight-blue"><i className="fa fa-facebook"></i></li>
                    <li className="bgred"><i className="fa fa-google-plus"></i></li>
                    <li className="bgdark-blue"><i className="fa fa-linkedin"></i></li>
                    <li className="bglight-blue"><i className="fa fa-twitter"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                © Copyright Medilab Theme. All Rights Reserved
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
