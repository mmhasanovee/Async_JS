//async funciton always returns a promise, async is non blocking..

const fetchPosts = async () => {
  const readData = await fetch("https://jsonplaceholder.typicode.com/users");
  //checking needed, suppose json is invalid, but it will be resolved and throw error..
  if(readData.status !== 200){
      throw new error('cant fetch teh data');
  }
  
  const resultJson = await readData.json();

  return resultJson;
};

fetchPosts()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });
