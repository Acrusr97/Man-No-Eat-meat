export function submitButton(data) {
let subB = {
    type : 'submit',
    textContent :'Valider',
    id :'login-submit-button',
}
return (
    `
    <button id="${data.id}" type ="${data.type}"> ${data.textContent} </button>
     `
)
}

export function logoutButton (data){
    let lgoB = {
        type : 'logout',
        textContent:'Quitter',
        id:'log-out-button',
    }
    return (
        `
        <button id="${data.id}" type ="${data.type}"> ${data.textcontent} </button>
        `
    )

} 

export function outButton (data){
    let oB = {
        type : 'logoff',
        textContent:'Fermer',
        id:'log-off-button',
    }
    return (
        `
        <button id="${data.id}" type ="${data.type}"> ${data.textcontent} </button>
        `
    )
}