//only rejects when network error or something..

fetch('https://jsonplaceholder.typicode.com/users').then((respnse)=>{
    console.log(respnse);
    //returning promise the following, so need to use then and print..
    return respnse.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('err');
});