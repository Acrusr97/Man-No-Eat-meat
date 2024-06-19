class ApiDataSource {
static async get (url) {
        return await fetch(url)
            .then((res) => res.json())
            
            .catch((err)=> err);
            }


static async post (url,data){
    return await fetch (url, {
        method:"POST",
        headers:{"Content-Type": "application/json "},
        body: JSON.stringify(data),
    })
        .then((resul) => resul.json())
        .catch((err) => err );
}
}
export default ApiDataSource
