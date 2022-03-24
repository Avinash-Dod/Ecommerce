import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/Socialicons";
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
                <iframe title={`Map`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1111861745353!2d75.88427395056645!3d22.72410838503192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd914a0060bd%3A0xbe92ef9af11413e2!2sByteCipher%20Private%20Limited!5e0!3m2!1sen!2sin!4v1648121814353!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>


  )
}
export default Contact;