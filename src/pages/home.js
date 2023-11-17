import React from "react";
import PayChallan from "../components/challanfees";

const Home = () => {
  let toggle = false;
  return (
    <>
      <div className="home">
        <form onSubmit={(toggle = true)} className="getChallan">
          <input type="text" placeholder="Enter Registration Number" />
          <button type="submit">Get Challan</button>
        </form>
      </div>
      {toggle && (
        <div className="payChallanList">
          <PayChallan
            challanDate="12/09/2023"
            reason="Expired"
            area="Chandigarh"
            fee="₹ 2,000"
            lastDate="12/12/2023"
          />
          <PayChallan
            challanDate="12/09/2023"
            reason="Expired"
            area="Chandigarh"
            fee="₹ 2,000"
            lastDate="12/12/2023"
          />
          <PayChallan
            challanDate="12/09/2023"
            reason="Expired"
            area="Chandigarh"
            fee="₹ 2,000"
            lastDate="12/12/2023"
          />
        </div>
      )}
      
    </>
  );
};

export default Home;
