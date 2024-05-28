export function step1() {
  let section = document.createElement("section");
  section.id = "step1";
  section.classList.add("container");
  section.innerHTML = `
  <section class="container">
        <div>
          <title-el>Necesitamos algunos datos mas</title-el>
          <form action="">
            <input-el labelEl="Email"></input-el>
            <input-el labelEl="Comida Favorita"></input-el>
            <select-el labelEl="Alguna de estas tres opciones"></select-el>

            <button-el class="button-continuar" ConColor>Continuar</button-el>
            <button-el class="button-volver">Volver</button-el>
          </form>
        </div>
      </section>
  `;
  return section;
}
