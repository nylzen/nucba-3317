import { appState } from "../data/data";

//Función que indica si estamos en el último array del array de  productos divididos.
export const isLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit - 1;
  };