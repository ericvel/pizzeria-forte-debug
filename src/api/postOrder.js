export const postOrder = (body) => {
  // TODO: Implementer et fetch() call som poster bestillingen til APIet
  fetch("https://kjetilpizzaapi.azurewebsites.net/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
