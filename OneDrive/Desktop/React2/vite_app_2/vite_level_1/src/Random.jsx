function Random() {
  let num = Math.random()*100;
  return <h1 style={{backgroundColor:"lightblue"}}>My Random number is : {Math.round(num)} </h1>
}

export default Random;