import Header from "../components/Header";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <Header />
      <div>

        <div className="page-heading contact-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>contact us</h4>
                  <h2>let’s get in touch</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="find-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Location on Maps</h2>
                </div>
              </div>
              <div className="col-md-8">
                {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
--> */}
                <div id="map">

                </div>
              </div>
              <div className="col-md-4">
                <div className="left-content">
                  <h4>About our office</h4>
                  <p>lorem ipsum</p>
                  <ul className="social-icons">
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-twitter"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                    <li><i className="fa fa-behance"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>


  )
}
export default Contact;