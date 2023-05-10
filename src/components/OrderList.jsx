import React from "react";
import OrderItem from "./OrderItem";

export default function OrderList({ orders, onSelectOrder }) {
  return (
    <div className="flex flex-col divide-y divide-stone-400 overflow-y-auto pr-6">
      {orders.length ? (
        orders.map((order, index) => (
          <OrderItem
            order={order}
            onCheckDetails={() => onSelectOrder(order)}
            key={index}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
