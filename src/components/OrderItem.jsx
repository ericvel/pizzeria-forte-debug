import React from "react";
import Button from "./Button";

const Field = ({ label, value }) => (
  <div className="w-32">
    <p className="text-sm text-gray-500">{label}</p>
    <p>{value}</p>
  </div>
);

export default function OrderItem({ order, onCheckDetails = () => {} }) {
  return (
    <div className="flex items-center gap-16 py-4">
      <Field label="Ordernr." value={order.orderId.toString()} />
      <Field label="Pris" value={`${order.price} kr`} />
      <Field label="Antall pizzaer" value={`${order.pizza.length} stk.`} />
      <Button onClick={() => onCheckDetails()} variant="ghost" size="small">
        Se detaljer
      </Button>
    </div>
  );
}
