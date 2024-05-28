import "./components/header/header.ts";
import "./components/footer/footer.ts";
import "./components/title/title.ts";
import "./components/subtitle/subtitle.ts";
import "./components/button/button.ts";
import "./components/input/input.ts";
import "./components/select/select.ts";

export function handleRoute(route: any) {
  console.log(route);

  const routes = [
    {
      path: /\/step1/,
      handler: () => {},
    },
    {
      path: /\/welcome/,
      handler: () => {},
    },
    {
      path: /\/thankyou/,
      handler: () => {},
    },
  ];

  for (let r of routes) {
    if (r.path.test(route)) {
      //   console.log("ruta encontrada", r);
      r.handler;
    }
  }
}

export function goTo(path: any) {
  /*
    /step1
    /thankyou
    */
  history.pushState({}, "", path);
  handleRoute(path);
}

// handleRoute(location.pathname);
// export function App() {
//   let sectionRoot = document.querySelector("#root");
//   sectionRoot!.innerHTML = `${step1()}`;
// }
