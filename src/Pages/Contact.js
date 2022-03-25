import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/Socialicons";
import BannerContact from "../components/BannerContact";
import Map from "../components/Map";
function Contact() {
  return (
    <>
      <Header />
      <BannerContact />
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
               <Map />
              </div>
              <SocialIcons />
            </div>
          </div>
        


      </div>
      <Footer />
    </>


  )
}
export default Contact;