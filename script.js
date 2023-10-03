// const options ={
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "67bb9ceb28msh1fb6b0bd7292359p1f2660jsn33ab8014ef90",
// 		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
// 	},
// };

// fetch{'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options}
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err     => console.error(err))



const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67bb9ceb28msh1fb6b0bd7292359p1f2660jsn33ab8014ef90',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}