import { cartActionsInit } from "./assets/cart/cart";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface";
import { productsSectionInit } from "./assets/products-section/";
import { scrollEffectInit } from "./assets/scroll-effects/scroll";
import { typewriterInit } from "./assets/typewriter/typewriter";

//Función inicializadora
const init = () => {
  productsSectionInit();
  cartActionsInit();
  menuInterfaceInit();
  scrollEffectInit();
  typewriterInit()
};

init();
