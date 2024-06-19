const button = function (data) {
    
    return (
        `
        <button id=${data.id} placeholder=${data.placeholder} content=${data.content} type=${data.type}><button>
        
        `
    )
}
export default button