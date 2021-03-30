import React, { useState, useEffect } from "react";
import OrderTable from "../components/OrderTable";
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

  if (orders) {
    console.log(orders);
  }

  return <OrderTable orders={orders} />;
};

export default Builder;
