import React from "react";

function ChallanCard(props) {
  const {
    carImage,
    registrationNumber,
    ownerName,
    fuelType,
    registrationYear,
    expiryYear,
  } = props;

  return (
    <div className="challan-section">
      <img src={carImage} alt="" />
      <div className="carDescp">
        <h1>
          Registration Number: <span>{registrationNumber}</span>
        </h1>

        <h3>
          Owner Name: <span>{ownerName}</span>
        </h3>
        <h3>
          Fuel Type: <span>{fuelType}</span>
        </h3>
        <h3>
          Registration Year: <span>{registrationYear}</span>
        </h3>
        <h3>
          Expiry Year: <span>{expiryYear}</span>
        </h3>
        <button>Challan</button>
      </div>
    </div>
  );
}

export default ChallanCard;
