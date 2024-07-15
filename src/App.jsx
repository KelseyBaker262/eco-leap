import "./App.scss";

function App() {
	async function fetchData() {
		const url = "https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_model";
		const data = new FormData();
		data.append("vehicle_make", "Ford");
		data.append("vehicle_model", "Aerostar Wagon");
		data.append("distance_value", "42");
		data.append("distance_unit", "mi");

		const options = {
			method: "POST",
			headers: {
				"x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
				"x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
				Authorization: import.meta.env.VITE_AUTHORIZATION,
			},
			body: data,
		};

		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const result = await response.json();
			console.log(result.data.co2e_kg);
		} catch (error) {
			console.error(error);
		}
	}

// Call the function
	const result = fetchData();
	console.log(result)
	return <h1>Welcome to Eco Leap</h1>;
}

export default App;
