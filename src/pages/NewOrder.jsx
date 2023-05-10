import React, { useEffect, useState } from "react";

import Heading from "../components/Heading";
import PizzaCard from "../components/PizzaCard";
import ShoppingCart from "../components/ShoppingCart";

import { fetchAllPizzas } from "../api/fetchAllPizzas";

export default function NewOrder() {
  const [pizzas, setPizzas] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  useEffect(() => {
    fetchAllPizzas().then((response) => setPizzas(response));
  }, []);

  const handleAddToOrder = (pizza) => {
    setShoppingCartItems((currentCartItems) => [...currentCartItems, pizza]);
  };

  const handleRemoveFromOrder = (itemIndex) => {
    const updatedCartItems = shoppingCartItems.filter(
      (_, index) => index !== itemIndex
    );

    setShoppingCartItems(updatedCartItems);
  };

  const handleCompleteOrder = () => {
    setShoppingCartItems([]);

    alert(
      "Bestilling er fullført! \n\n" +
        shoppingCartItems.map((item) => item.name + "\n").join("")
    );
  };

  return (
    <div className="flex w-full" id="new-order">
      <div className="grow overflow-y-auto p-6">
        <Heading>Bestill</Heading>
        <div className="grid grid-cols-2 gap-4">
          {pizzas.map((pizza, index) => (
            <PizzaCard
              pizza={pizza}
              onAddToOrder={handleAddToOrder}
              key={index}
            />
          ))}
        </div>
      </div>
      <ShoppingCart
        items={shoppingCartItems}
        onRemoveFromOrder={handleRemoveFromOrder}
        onCompleteOrder={handleCompleteOrder}
      />
    </div>
  );
}
