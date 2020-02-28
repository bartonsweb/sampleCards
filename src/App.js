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
	const [hash, setHash] = useState(data);
	var homeData = [],
		favData = [];
	useEffect(() => {
		console.log('Print me');
		homeData = hash.filter((d) => !d.favorite);
		favData = hash.filter((d) => d.favorite);
		setHash([...favData, ...homeData]);
	}, []);

	// console.log('Hash', hash);

	return (
		<div style={{ padding: 30 }}>
			{hash.map((d, i) => {
				return (
					<div key={d.id} style={{ backgroundColor: d.favorite ? 'red' : 'white' }}>
						<h1>{d.id}</h1>
						<p>{d.text}</p>
						<button
							onClick={() => {
								console.log(i);
								const restD = hash.filter((el) => el.id !== d.id);

								d.favorite
									? setHash([...restD, { ...d, favorite: !d.favorite }])
									: setHash([{ ...d, favorite: !d.favorite }, ...restD]);
							}}>{`favorite ${d.favorite}`}</button>
					</div>
				);
			})}
		</div>
	);
};

export default App;
