import React, { useEffect, useState } from "react";
import "./price-table.com.scss";

const className = "price-table-comp";

const requestUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

const PriceTable = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (data === undefined) fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch(requestUrl);
    const json = await data.json();
    setData(json);
  };

  return (
    <div className={`${className}`} key={Math.random()}>
      <div className={`${className}-info`}>
        <label>{`The counter at the top is not related to the prices below or request made to the API.`}</label>
      </div>
      <div className={`${className}-info`}>
        <label>{`Bitcoin prices from API gets updated every minute. Therefore, I set it to update every minute.`}</label>
      </div>
      <div className={`${className}-label-group`}>
        <label className={`${className}-label`}>
          {`USD ($): ${data?.bpi?.USD?.rate || ``}`}
        </label>
        <label className={`${className}-label`}>{`GBP (£): ${
          data?.bpi?.GBP?.rate || ``
        }`}</label>
        <label className={`${className}-label`}>{`EUR (€): ${
          data?.bpi?.EUR?.rate || ``
        }`}</label>
      </div>
    </div>
  );
};

export default PriceTable;
