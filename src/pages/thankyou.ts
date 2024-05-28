export function thankyou() {
  let section = document.createElement("section");
  section.id = "thankyou";
  section.classList.add("container");
  section.innerHTML = `
          <section class="container">
              <title-el>Gracias</title-el>
              <subtitle-el>Toda la informacion que nos brindaste es muy importante</subtitle-el>
              <button-el class="button-denada" ConColor">De nada</button-el>
          </section>
    `;
  return section;
}
