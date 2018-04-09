console.log('Start Script!');
// object dat je maakt, doet iets, weet niet wnr het klaar is, vertelt wnr het klaar is en wnr het faalt
const myPromise = () => {
    // "promise to do something"
	return new Promise(resolve => {
        // resolve: als hello world geprint wordt
		setTimeout(() => {
			resolve("Hello world!");
		}, 1000);
	});
};
// functie wordt opgeroepen
myPromise()
    // wnr functie klaar is (wacht op response)
	.then((response) => {
		console.log(response);
	});

console.log('Stop Script!');