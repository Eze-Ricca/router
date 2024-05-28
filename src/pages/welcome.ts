export function welcome() {
  let section = document.createElement("section");
  section.id = "welcome";
  section.classList.add("container");
  section.innerHTML = `
          <div>
            <title-el>Te Damos la bienvenida a esa página</title-el>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              consequuntur iure voluptas quia accusantium voluptatum aspernatur
              provident et repudiandae quam veritatis, libero porro sit beatae
              laboriosam a aut consequatur quidem?
            </p>
            <subtitle-el>Para continuar ingresa tu nombre:</subtitle-el>
            <form action="">
              <input-el labelEl="Nombre"></input-el>
              <button-el class="button-comenzar" ConColor>Comenzar</button-el>
            </form>
          </div>
  `;
  return section;
}
