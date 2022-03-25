import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/BannerHome";
import productDetail from '../userData.json'

const productData = productDetail.productData;
function Home()
{
    return (
        <>
        <Header />
   <BannerHome />
    
   <div className="latest-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Latest Products</h2>
              <a href="products.html">view all products <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
          {productData.map((exp) => (
          <div className="col-md-4">
            <div className="product-item">
            <img src={exp.image} alt="" />
              <div className="down-content">
                <a href="# "><h4>{exp.title}</h4></a>
                <h6>Rs. {exp.price} </h6>
                <p>{exp.description}</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (24)</span>
                <br></br>
                <button type="submit" className="btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart </button>
              </div>
            </div>
          </div>
  ))}
          
        </div>
      </div>
    </div>

    {/* <div classNameName="call-to-action">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-12">
            <div classNameName="inner-content">
              <div classNameName="row">
                <div classNameName="col-md-8">
                  <h4>Creative &amp; Unique <em>Sixteen</em> Products</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div classNameName="col-md-4">
                  <a href="# " classNameName="filled-button">Purchase Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
        <div classNameName="best-features">
        <div classNameName="container">
          <div classNameName="row">
            <div classNameName="col-md-12">
              <div classNameName="section-heading">
                <h2>About Sixteen Clothing</h2>
              </div>
            </div>
            <div classNameName="col-md-6">
              <div classNameName="left-content">
                <h4>Looking for the best products?</h4>
                <p><a rel="nofollow" href="https://templatemo.com/tm-546-sixteen-clothing" target="_parent">This template</a> is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. <a rel="nofollow" href="/contact">Contact us</a> for more info.</p>
                <ul classNameName="featured-list">
                  <li><a href=" #">Lorem ipsum dolor sit amet</a></li>
                  <li><a href=" #">Consectetur an adipisicing elit</a></li>
                  <li><a href=" #">It aquecorporis nulla aspernatur</a></li>
                  <li><a href=" #">Corporis, omnis doloremque</a></li>
                  <li><a href=" #">Non cum id reprehenderit</a></li>
                </ul>
                <a href="/about" classNameName="filled-button">Read More</a>
              </div>
            </div>
            <div classNameName="col-md-6">
              <div classNameName="right-image">
                <img src="assets/images/feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
      </>
    )

}
export default Home;