import React, { useState, useEffect } from "react";
import OrderTable from "../components/OrderTable";
import Header from '../components/Header'
import axios from "axios";
const Builder = (props) => {
  const [data, setData] = useState([]);
  const [orders,setOrders] = useState([])
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/dsrishi/orders/orders")
      .then((res) => {
        setData(res.data);
        setOrders(res.data);
      });
  }, []);

  const filterByBranchHandler = (value) =>{
      if(value === 'Colombo'){
       const newOrders = data.filter(item =>{
           return item.branch == "Colombo"
       })
       setOrders(newOrders)
    }else if(value ==="Kandy"){
        const newOrders = data.filter(item =>{
            return item.branch == "Kandy"
        })
        setOrders(newOrders)
    }
  }

  return (
      <div>

          <Header filterByBranchHandler={filterByBranchHandler}/>
        <OrderTable orders={orders} />
      </div>
  );
};

export default Builder;
