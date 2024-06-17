export default function () {
  const TOKEN = JSON.parse(window.localStorage.getItem("man-no-eat-meet"));

  const LOGGEGINNAV = () => {
    return `<a href=''>
                   <i class='fa-solid fa-right-frombracket'></i>
                     </a>
                    `;
  };

  const LOGGEDOUTNAV = () => {
    return `
            <a href=''>
            <i class="fa-solid fa-right-to-bracket"> </i>
            </a>
            `;
  };
  return `
        <header class="app-hearder">
        <span aria-lable="ManNoEatMeet">ManNoEatMeet</span>
        <nav id ="header-nav">
        ${token && token.length ? LOGGEDOUTNAV() : LOGGEGINNAV()}
        </nav>
        </header>        
        `;
}
