// Immediately Invoked Function Ecpressions (IIFE)

(function chai() {
    // named IIFI
    console.log(`DB CONNECTED`);
    
})();

(
    (name) => {
        console.log(`DB CONNECTED  ${name}`);
    }
)('shashi');
