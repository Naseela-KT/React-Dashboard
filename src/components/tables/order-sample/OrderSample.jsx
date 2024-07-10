import SingleList from "./SingleList"
import "./OrderSample.css"

const OrderSample = () => {
  return (
    <div className="order-sample">
    <h6>Recent Orders</h6>
        <ul>
          <li style={{listStyle:"none"}}>
            <SingleList/>
          </li>
          <li style={{listStyle:"none"}}>
            <SingleList/>
          </li>
          <li style={{listStyle:"none"}}>
            <SingleList/>
          </li>
          <li style={{listStyle:"none"}}>
            <SingleList/>
          </li>
          <li style={{listStyle:"none"}}>
            <SingleList/>
          </li>
        </ul>
    </div>
  )
}

export default OrderSample