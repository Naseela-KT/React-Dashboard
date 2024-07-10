/* eslint-disable react/prop-types */

import { FiChevronDown } from "react-icons/fi"; 
import "./Card.css";

const Card = ({ icon, title, content1, content2, content3,sub1,sub2,sub3,color }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="header-left">
          <div className="icon" style={color ? { backgroundColor: color, color: "#5570F1" } : {}}>{icon}</div>
        </div>
        <div className="header-right">
          <p>{title}</p>
          <FiChevronDown size={20} />
        </div>
      </div>
      <div className="card-body">
        <div>
          <p>{content1}</p>
          <h6>{sub1}</h6>
        </div>
        {content2 && (
          <div>
            <p>{content2}</p>
            <h6>{sub2}</h6>
          </div>
        )}

        <div>
          <p>{content3}</p>
          <h6>{sub3}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
