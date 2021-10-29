const getPosts = (callback) => {
  const request = new XMLHttpRequest();
  //listening to the response from the http request
  request.addEventListener("readystatechange", () => {
    //4 means the request result pursing is done
    if (request.readyState === 4 && request.status === 200) {
      //parsing to js object
      const data = JSON.parse(request.responseText);
      //console.log(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("error fetching data", undefined);
      //console.log("couldnt fetch the data");
    }
  });

  //setting up the end point.
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");

  //sending the request finally
  request.send();
};

getPosts((error, data) => {
  if (error) {
    console.log(error);
  } else if (data) {
    console.log(data);
  }
});
console.log("1");
console.log("2");
console.log("3");
console.log("4");
