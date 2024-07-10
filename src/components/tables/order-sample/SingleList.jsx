import "./OrderSample.css";
const SingleList = () => {
  return (
    <div className="single-list">
   
      <div className="d-flex">
        <img
          src="https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg"
          height={30}
          width={25}
        />

        <div>
          <p>iPhone13</p>
          <p>730,000.00 x 1</p>
        </div>
      </div>
      <div className="d-flex flex-col">
        <p>12 sep 2022</p>
        <p>Pending</p>
      </div>
    </div>
  );
};

export default SingleList;
