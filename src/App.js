import React, { useState, useEffect } from 'react';

var data = [
	{ id: 1, text: 'A', favorite: false },
	{ id: 2, text: 'B', favorite: false },
	{ id: 3, text: 'C', favorite: false },
	{ id: 4, text: 'D', favorite: false },
	{ id: 5, text: 'E', favorite: false },
	{ id: 6, text: 'F', favorite: false },
	{ id: 7, text: 'G', favorite: false },
	{ id: 8, text: 'H', favorite: false },
	{ id: 9, text: 'I', favorite: false },
	{ id: 10, text: 'J', favorite: false },
	{ id: 11, text: 'K', favorite: false },
	{ id: 12, text: 'L', favorite: false },
	{ id: 13, text: 'M', favorite: true },
	{ id: 14, text: 'N', favorite: true },
	{ id: 15, text: 'O', favorite: true },
];

const App = () => {
	const [hash, setHash] = useState({ data: data, obj: {} });
	var homeData = [],
		favData = [];

	useEffect(() => {
		console.log('Print me');
		homeData = data.filter((d) => !d.favorite);
		console.log(homeData);
		favData = data.filter((d) => d.favorite);
		console.log(favData);

		setHash({ data: [...favData, ...homeData], obj: {} });
	}, []);

	// console.log('Hash', hash);

	return (
		<div style={{ padding: 30 }}>
			{hash.data.map((d) => {
				return (
					<div style={{ backgroundColor: d.favorite ? 'red' : 'white' }}>
						<h1>{d.id}</h1>
						<p>{d.text}</p>
						<button
							onClick={(e) => {
								setHash({ obj: d });
								console.log('check', hash);
								let excludeObj = hash.data.filter((e) => e.id !== d.id);
								let includeObj = hash.data.filter((e) => e.id === d.id && e.fav === !d.favorite);
								console.log('includeobj', includeObj);

								console.log('Realhash', setHash({ data: hash.data }));
							}}>{`favorite ${d.favorite}`}</button>
					</div>
				);
			})}
		</div>
	);
};

export default App;
