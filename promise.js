const getPosts = (jsonServers) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    //listening to the response from the http request
    request.addEventListener("readystatechange", () => {
      //4 means the request result pursing is done
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("theres been an error");
      }
    });
    //setting up the end point.
    request.open("GET", jsonServers);
    //sending the request finally
    request.send();
  });
};

//sequentially returning promises.
getPosts("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log("First promise", data);
    //this ultimately returns a promise, so need to add a .then...
    return getPosts("https://jsonplaceholder.typicode.com/photos");
  })
  .then((data) => {
    console.log("Second Promise", data);
    return getPosts("https://jsonplaceholder.typicode.com/users");
  })
  .then((data) => {
    console.log("Third Promise", data);
  })
  .catch((error) => {
    console.log(error);
  });
