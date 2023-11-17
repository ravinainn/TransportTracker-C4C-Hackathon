import React from "react";
import ChallanCard from "../components/challanCard";
const Challan = () => {
  return (
    <>
      <div className="challan-container">
        <h1>List of Expired Cars running on road</h1>
        <ChallanCard
          carImage="./images/car1.jpg"
          registrationNumber="DL 10 CU 1719"
          ownerName="Devender Solanki"
          fuelType="Petrol"
          registrationYear="2012"
          expiryYear="2022"
        />
        <ChallanCard
          carImage="./images/car2.jpg"
          registrationNumber="UP 80 EK 7741"
          ownerName="Sumit Kumar"
          fuelType="Petrol"
          registrationYear="2011"
          expiryYear="2021"
        />
        <ChallanCard
          carImage="./images/car3.jpeg"
          registrationNumber="DL 1 CX 8632"
          ownerName="Kavinder Kumar"
          fuelType="Diesel"
          registrationYear="2006"
          expiryYear="2021"
        />
        <ChallanCard
          carImage="./images/car4.jpeg"
          registrationNumber="HR 26 DU 0004"
          ownerName="Sameer Joshi"
          fuelType="Diesel"
          registrationYear="2010"
          expiryYear="2020"
        />
        <ChallanCard
          carImage="./images/car5.jpeg"
          registrationNumber="DL 4C AA 0006"
          ownerName="Rahul Singh"
          fuelType="Petrol"
          registrationYear="2005"
          expiryYear="2015"
        />
      </div>
    </>
  );
};

export default Challan;
