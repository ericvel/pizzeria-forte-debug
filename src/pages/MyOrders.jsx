import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import OrderDetails from "../components/OrderDetails";

import { fetchUserOrders } from "../api/fetchUserOrders";
import OrderList from "../components/OrderList";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState();

  useEffect(() => {
    const userId = 1; // hardkodet bruker-ID
    fetchUserOrders(userId).then((response) => setOrders(response));
  }, []);

  return (
    <div className="flex w-full flex-col p-6" id="my-orders">
      <Heading>Mine bestillinger</Heading>
      <div className="flex gap-x-6 overflow-y-auto">
        {orders.length ? (
          <OrderList orders={orders} onSelectOrder={setSelectedOrder} />
        ) : (
          <p>Loading...</p>
        )}
        {selectedOrder && <OrderDetails order={selectedOrder} />}
      </div>
    </div>
  );
}
