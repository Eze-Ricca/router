(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();class c extends HTMLElement{static get style(){return`
    div{
        width: 1440px;
        height: 60px;
        background-color: #FF8282;   
        display: flex;
        justify-content: center;
        align-items: center;     
    }
    h3 {
        margin: 0px;
        font-size: 22px;
        font-weight: 500;
        
     
    }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${c.style}</style>
    <div><h3>Header</h3></div>
    `}}customElements.define("header-el",c);class d extends HTMLElement{static get style(){return`
    div{
        background-color: #FFA0EA;
        width: 1440px;
        height: 233px;
        display: flex;
        justify-content: center;
        align-items: center
    }
    h3 {
        margin: 0;
        font-size: 22px;
        font-weight: 500;
    }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${d.style}</style>
    <div><h3>footer</h3></div>
    `}}customElements.define("footer-el",d);class u extends HTMLElement{static get style(){return`
    h1{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 52px;   
     }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${u.style}</style>
    <h1><slot></slot></h1>
    `}}customElements.define("title-el",u);class p extends HTMLElement{static get style(){return`
    h2{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 28px; 
    }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${p.style}</style>
    <h3><slot></slot></h3>
    `}}customElements.define("subtitle-el",p);class r extends HTMLElement{static get styleBase(){return`
    
    div{
        min-width:352px;
    }
    button{
        background-color: "transparent";
        border: solid 2px black;
        border-radius: 4px;
        width: 100%;
        height: 55px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 22px;
        cursor: pointer;
    }
    `}static get styleConColor(){return`
    button{
        background-color: #9CBBE9;
        border: solid 2px transparent;        
    }   
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${r.styleBase}</style>    
    `,this.shadowRoot.innerHTML+=`
    <div>
        <button><slot></slot></button>
    </div>  
    `,this.hasAttribute("conColor")&&(this.shadowRoot.innerHTML+=`
          <style>${r.styleConColor}</style>  
          `)}}customElements.define("button-el",r);class h extends HTMLElement{static get style(){return`
    fieldset{
        min-width: 352px;
        height: 69px;               
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        border: none;
        outline: none;
    }
    label{
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 21.09px; 
    }
    input{
        width: 99%;
        height: 45px;
        padding: 0px;
        margin: 0px;
        border: solid 2px black;
        border-radius: 4px;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 400;
        line-height: 21.09px; 
      }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${h.style}</style>
    <fieldset>
    <label for="">${this.getAttribute("labelEl")}</label>
    <input type="text" />
      </fieldset>
    `}}customElements.define("input-el",h);class m extends HTMLElement{static get style(){return`
      fieldset{
          min-width: 352px;
          height: 69px;               
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: column;
          border: none;
          outline: none;
      }
      label{
          font-family: "Roboto";
          font-size: 18px;
          font-weight: 400;
          line-height: 21.09px; 
      }
      select{
          width: 99%;
          height: 55px;
          padding: 0px;
          margin: 0px;
          border: solid 2px black;
          border-radius: 4px;
          font-family: "Roboto";
          font-size: 18px;
          font-weight: 400;
          line-height: 21.09px; 
        }
      `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>${m.style}</style>
      <fieldset>
         <label for="">${this.getAttribute("labelEl")}</label>
        <select>
            <option value="">Piedra</option>
            <option value="">Papel</option>
            <option value="">Tijera</option>
         </select>
     </fieldset>
      `}}customElements.define("select-el",m);function f(e){console.log(e);const o=[{path:/\/step1/,handler:()=>{}},{path:/\/welcome/,handler:()=>{}},{path:/\/thankyou/,handler:()=>{}}];for(let i of o)i.path.test(e)&&i.handler}function a(e){history.pushState({},"",e),f(e)}function b(){let e=document.createElement("section");return e.id="step1",e.classList.add("container"),e.innerHTML=`
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
  `,e}function g(){let e=document.createElement("section");return e.id="welcome",e.classList.add("container"),e.innerHTML=`
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
  `,e}function x(){let e=document.createElement("section");return e.id="thankyou",e.classList.add("container"),e.innerHTML=`
          <section class="container">
              <title-el>Gracias</title-el>
              <subtitle-el>Toda la informacion que nos brindaste es muy importante</subtitle-el>
              <button-el class="button-denada" ConColor">De nada</button-el>
          </section>
    `,e}(function(){const o=document.querySelector("#root");o==null||o.append(g());const i=document.querySelector("#root1");i.append(b());const s=document.querySelector("#root2");s.append(x());const t=document.querySelector(".button-comenzar"),n=document.querySelector(".button-continuar"),l=document.querySelector(".button-denada"),y=document.querySelector(".button-volver");window.addEventListener("load",()=>{f(location.pathname),o.style.display="initial",i.style.display="none",s.style.display="none"}),t.addEventListener("click",()=>{a("/step1"),o.style.display="none",i.style.display="initial",s.style.display="none"}),n.addEventListener("click",()=>{a("/thankyou"),o.style.display="none",i.style.display="none",s.style.display="initial"}),y.addEventListener("click",()=>{a("/welcome"),o.style.display="initial",i.style.display="none",s.style.display="none"}),l.addEventListener("click",()=>{a("/welcome"),o.style.display="initial",i.style.display="none",s.style.display="none"})})();
