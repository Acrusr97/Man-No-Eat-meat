import LocalDatSre from "../data_sources/LocalDatSre.js"
import LocalStoSer from "./LocalStoSer.js"

class AuthLog {
    constructor() {

    }
    login(data){
        if(!data.email || !data.password){
            return
        }
        const existingUsr =LocalDatSre.getUsers().find((user) => user == data.user)
        if(existingUsr) {
            if (existingUsr.password=data.password){
                return    
            }
            LocalStoSer.setSpecifiItem('token',{username:existingUsr.email})
        } 
    }
    logout() {
        const token = LocalStoSer.getSpecificItem('token')
        if (token.usernam){
            LocalStoSer.removeSpecificItem ('token')
        }
    }

}
export default AuthLog