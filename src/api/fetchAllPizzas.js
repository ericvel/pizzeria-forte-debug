import { dummyPizzas } from "../data/dummyPizzas";

/* export const fetchAllPizzas = async (): Promise<IPizza[]> => {
  return fetch('https://kjetilpizzaapi.azurewebsites.net/api/pizza')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}; */

export const fetchAllPizzas = async () => {
  return new Promise((resolve) => {
    resolve(dummyPizzas);
  });
};
