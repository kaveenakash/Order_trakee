import React, { useState, useEffect } from "react";
import OrderTable from "../components/OrderTable";
import Header from '../components/Header'
import axios from "axios";
const Builder = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/dsrishi/orders/orders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  const filterByBranchHandler = () =>{
    
  }

  return (
      <div>

          <Header/>
        <OrderTable orders={orders} />
      </div>
  );
};

export default Builder;
