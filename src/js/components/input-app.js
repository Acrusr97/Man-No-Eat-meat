const inputApp = function (id, template) {
    return `
              <article class="input-article">
                  <label for=${id}></label>
                  ${template}
                  <small
                      id="${id}"conteneur pour les erreurs liées à ${id} ">
                  </small>
              </article>
          `;
  };
  
  export default inputApp;