import Layout from "../components/layout/Layout";
import { FiActivity } from "react-icons/fi";
import Card from "../components/card/Card";
import "./Orders.css";
import OrderTable from "../components/tables/order/OrderTable";

const Orders = () => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="box card1">
          <Card
            icon={<FiActivity size={24} />}
            title="This Week"
            content1="Sales"
            content3="Volume"
            sub1="4,000,000.00"
            sub3="450"
          />
        </div>
        <div className="box card2">
          <Card
            icon={<FiActivity size={24} />}
            content1="Customers"
            content3="Active"
            sub1="1,250"
            sub3="1,180"
          />
        </div>
        <div className="box card3">
          <Card
            icon={<FiActivity size={24} />}
            content1="All Orders"
            content2="Pending"
            content3="Complete"
            sub1="450"
            sub2="5"
            sub3="445"
          />
        </div>
        <div className="box order-table">
          <div className="table-header">
            <h5>Customer Orders</h5>
            <div className="filters">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <hr />
          <OrderTable />
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
