import Layout from "../components/layout/Layout";
import Card from "../components/card/Card";
import { FiActivity } from "react-icons/fi"; 
import "./Dashboard.css";
import ApexChart from "../components/charts/Apexchart";
import OrderSample from "../components/tables/order-sample/OrderSample";
import ColumnChart from "../components/charts/Columnchart";

const Dashboard = () => {
  return (
    <>
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

          <div className="box pie-chart">
            <ApexChart/>
          </div>
          <div className="box order-table">
            <OrderSample/>
          </div>
          <div className="box card4">
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
          <div className="box card5">
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
          <div className="box bar-chart">
            <ColumnChart/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
{
  /* <div className="wrapper">
  <div className="box a">A</div>
  <div className="box b">B</div>
  <div className="box c">C</div>
  <div className="box d">D</div>
   <div className="box e">E</div>
</div> */
}
