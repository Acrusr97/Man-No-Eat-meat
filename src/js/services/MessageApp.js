class MessageApp {
    #message="";
    constructor(){}

        get message() {
            return this.#message;
        }
 set message(mnem){
    this.#message = mnem;
const messageElement = document.getElementById("message");
messageElement.innerHTML =`<small class='notification ${mnem.type}'> ${mnem.content} </small> `
}   
}
export default MessageApp