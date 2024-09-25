// Immediately Invoked Function Expression (IIFE)
(function chai() {
  // named IIFE
  console.log("DB Connected");
})();

((username) => {
  // unnamed IIFE
  console.log(`DB CONNECTED 2 for ${username}`);
})("Soumil Agarwal");
