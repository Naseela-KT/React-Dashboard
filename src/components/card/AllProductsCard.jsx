/* eslint-disable react/prop-types */


import "./Card.css";

const AllProductsCard = ({ icon, content1, content3,sub1,sub3}) => {
  return (
    <div className="card allproducts">
      <div className="card-header allproducts">
        <div className="header-left">
          <div className="icon" id="icon">{icon}</div>
        </div>
       
      </div>
      <div className="card-body">
        <div>
          <p>{content1}</p>
          <h6>{sub1}</h6>
        </div>

        <div>
          <p>{content3}</p>
          <h6>{sub3}</h6>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
