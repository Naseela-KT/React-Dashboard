import "./OrderTable.css";
import TableRow from "./TableRow";
import tableData from "./TableData";


const OrderTable = () => {
  return (

    <table className="table custom-table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Customer Name</th>
          <th scope="col">Order Date</th>
          <th scope="col">Order Type</th>
          <th scope="col">Tracking ID</th>
          <th scope="col">Order Total</th>
          <th scope="col">Action</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <TableRow {...item} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
