import SingleList from "./SingleList"
import "./OrderSample.css"

const OrderSample = () => {
  return (
    <div className="order-sample">
    <h6>Recent Orders</h6>
        <ul>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
          <li>
            <SingleList/>
          </li>
        </ul>
    </div>
  )
}

export default OrderSample