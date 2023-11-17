import React from "react";

const PayChallan = (props) => {
  const { challanDate, reason, area, fee, lastDate } = props;
  return (
    <>
      <div className="payChallan">
        <h3>
          Date of Challan: <span>{challanDate}</span>
        </h3>
        <h3>
          Reason: <span>{reason}</span>
        </h3>
        <h3>
          Incident Location: <span>{area}</span>
        </h3>
        <h3>
          Challan Fee: <span>{fee}</span>
        </h3>
        <h3>
          Last Date: <span>{lastDate}</span>
        </h3>
        <button>Pay Challan</button>
      </div>
    </>
  );
};

export default PayChallan;
