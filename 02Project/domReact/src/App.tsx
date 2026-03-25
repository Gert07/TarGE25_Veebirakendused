import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //! document.getElementById("");
  //! console.log(document);

  //? dir näitab kõiki DOM-i elemente, mis on lehel olemas, kuid see kuvab need hierarhiliselt
  //? näidates iga elemendi lapsi ja vanemaid. See on kasulik, kui soovite näha, kuidas elemendid 
  //? omavahel seotud
  //! console.dir(document);

  //! document.title = "DOM-i pealkiri on muudetud"
  //? muudab DOM body värvi
  //! document.body.style.backgroundColor = "rgba(159, 219, 243, 0.36)"
  //?Annab errori aga saab muuta h1 teksti
  //document.querySelector("h1")!.textContent = "Mis on DOM ja ?";

  const username: string = "";
  
  // const domTitle = document.getElementById("domTitle");
  // if (domTitle){
  //   domTitle!.textContent += username === "" ? "Tere külaline" : username;
  // }  

  return (
    <>
      <section id="center">
        <h1 id="dom-title">
          {username === "" ? "Mis on DOM?" : username}</h1>
        <p>
          DOM on dokumendi objektimudel. Veebibrauserite standardiseeritud liides mis esitab HTML ja XML-dokumente puustruktuurina
          võimaldades Javascriptiga dünaamiliselt lehte muuta. Saab muuta sisu, struktuuri ja vaadet. 
        </p>
        <p>
          Kui vaadate index.html, siis näete erinevaid elemente, mis suhtlevad DOM-iga. Nt div id="root" /div on koht, kuhu React
          rakendus käivitub, siis see loob DOM-i elemendid ja renderdab need #root div-i sisse, võimaldades teil näha ja suhelda nende
          elementidega veebilehel.
        </p>
        <p>
          Nt, html sees on head ja title. Body sees on h1, p, a jne. Need on kõik DOM-i elemendid, mida saab Javascripti abil
          manipuleerida.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
