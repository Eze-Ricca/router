import { goTo, handleRoute } from "./main";
import { step1 } from "./pages/step-1";
import { welcome } from "./pages/welcome";
import { thankyou } from "./pages/thankyou";

(function main() {
  const welcomeEl: HTMLElement | null = document.querySelector("#root");
  welcomeEl?.append(welcome());

  const step1El: HTMLElement | null = document.querySelector("#root1");
  step1El!.append(step1());

  const thankyouEl: HTMLElement | null = document.querySelector("#root2");
  thankyouEl!.append(thankyou());

  const buttonComenzar = document.querySelector(".button-comenzar");
  const buttonContinuar = document.querySelector(".button-continuar");
  const buttonDeNada = document.querySelector(".button-denada");
  const buttonVolver = document.querySelector(".button-volver");
  window.addEventListener("load", () => {
    handleRoute(location.pathname);

    welcomeEl!.style.display = "initial";
    step1El!.style.display = "none";
    thankyouEl!.style.display = "none";
  });

  buttonComenzar!.addEventListener("click", () => {
    goTo("/step1");
    welcomeEl!.style.display = "none";
    step1El!.style.display = "initial";
    thankyouEl!.style.display = "none";
  });

  buttonContinuar!.addEventListener("click", () => {
    goTo("/thankyou");
    welcomeEl!.style.display = "none";
    step1El!.style.display = "none";
    thankyouEl!.style.display = "initial";
  });

  buttonVolver!.addEventListener("click", () => {
    goTo("/welcome");
    welcomeEl!.style.display = "initial";
    step1El!.style.display = "none";
    thankyouEl!.style.display = "none";
  });
  buttonDeNada!.addEventListener("click", () => {
    goTo("/welcome");
    welcomeEl!.style.display = "initial";
    step1El!.style.display = "none";
    thankyouEl!.style.display = "none";
  });
})();
