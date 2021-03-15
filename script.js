function fetchData(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        const html = data.map(item => {
            return `
            <div class = "user">
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            </div>
            `;
        }).join("");
        console.log(html);
        document.querySelector("#info").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error =>{
        console.error(error);
    });
}
fetchData();