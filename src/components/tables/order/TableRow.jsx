/* eslint-disable react/prop-types */


const TableRow = ({ name, date, type, id, total, status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'c';
      case 'Pending':
        return 'p';
      case 'In-Progress':
        return 'i';
      default:
        return '';
    }
  };

  return (
    <tr>
      <td scope="row">
        <input type="checkbox" />
      </td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{type}</td>
      <td>{id}</td>
      <td>{total}</td>
      <td>
        <select className="form-select-s custom-select" value={status}>
          <option value="Completed">Completed</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </td>
      <td className={`status ${getStatusClass(status)}`}>
        <span className={getStatusClass(status)}>{status}</span>
      </td>
    </tr>
  );
};

export default TableRow;
