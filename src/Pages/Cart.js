
// import  {productData} from "../userData";
import productDetail from '../userData.json'

const productData = productDetail.productData;
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import './Login_signup.css'
// const st ={
//   "max-width":"500px",
//   "margin":"auto",
// }
//  let userDataimg =  "https://paynami2022.s3.us-east-2.amazonaws.com/qrcode_image/621f27807a02ba41d52d0a54.png"
const Cart = () => {
  return (
    <><div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
              </div>
              </div>
      {productData.map((exp) => (
           <div className="col-md-4">
          <div className="product-item">
            <a href="# "><img src={exp.image} alt="productnotfound" /></a>
            <div className="down-content">
              <a href="# "><h4>Tittle goes here</h4></a>
              <h6>$20.45</h6>
              <p>{exp.description}</p>
              <ul className="stars">
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
              </ul>
              <span>Reviews (36)</span>
              <button type="submit" className="btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add To </button>
            </div>
          </div>
        </div>
      ))}
     </div>
     </div>
     </div>
     
     
    </>
  );
};
export default Cart;
