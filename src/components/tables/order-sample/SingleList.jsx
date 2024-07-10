import "./OrderSample.css";
const SingleList = () => {
  return (
    <div id="single-list">
      <div className="d-flex">
        <img
          src="https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_SR360,240_QL70_.jpg"
          height={30}
          width={30}
        />

        <div className="mid-content">
          <p>iPhone13</p>
          <p className="price">730,000.00 x 1</p>
        </div>
      </div>
      <div className="end-content">
          <p>12 sep 2022</p>
          <p className="price-status">Pending</p>
      </div>
    </div>
  );
};

export default SingleList;
