class LocalStoSer {
     getSpecificItem = function (item){
        return JSON.parse(localStorage.getItem(item))
    }
    setSpecificItem(item,data){
        localStorage.setItem(item, JSON.stringify(data))

    }
    removeSpecificItem(item){
        localStorage.removeItem(item)
    }
}
export default LocalStoSer