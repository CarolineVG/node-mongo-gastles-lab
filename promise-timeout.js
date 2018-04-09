console.log('Start Script!');
// object dat je maakt, doet iets, weet niet wnr het klaar is, vertelt wnr het klaar is en wnr het faalt
const myPromise = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Hello world!");
		}, 1000);
	});
};
// functie wordt opgeroepen
myPromise()
    // wnr functie klaar is
	.then((response) => {
		console.log(response);
	});

console.log('Stop Script!');