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
	const [hash, setHash] = useState({
		catsdata: data,
		notFavoriteCatsData: [],
		showFav: false,
		sortByLastWord: false,
	});
	var notFavData = [],
		favData = [];
	useEffect(() => {
		notFavData = hash.catsdata.filter((d) => !d.favorite);
		favData = hash.catsdata.filter((d) => d.favorite);
		setHash({ ...hash, catsdata: [...favData, ...notFavData] });
	}, []);

	return (
		<div style={{ padding: 30 }}>
			<h1>Cats Project</h1>
			<button
				onClick={() => {
					// const nonFavoriteCatsData = hash.catsdata.filter((d) => !d.favorite);
					const favoriteCatsData = hash.catsdata.filter((d) => d.favorite);
					if (hash.showFav) {
						setHash({
							...hash,
							catsdata: [...favoriteCatsData, ...hash.notFavoriteCatsData],
							showFav: false,
						});
					} else {
						setHash({
							...hash,
							notFavoriteCatsData: hash.catsdata.filter((d) => !d.favorite),
							catsdata: [...favoriteCatsData],
							showFav: true,
						});
					}
				}}>{`Show ${hash.showFav ? 'All' : 'Only Fav'}`}</button>

			{hash.catsdata.map((d, i) => {
				return (
					<div key={d.id} style={{ backgroundColor: d.favorite ? '#da7878' : 'white' }}>
						<h1>{d.id}</h1>
						<p>{d.text}</p>
						<button
							onClick={() => {
								const restD = hash.catsdata.filter((el) => el.id !== d.id);

								d.favorite
									? setHash({ ...hash, catsdata: [...restD, { ...d, favorite: !d.favorite }] })
									: setHash({ ...hash, catsdata: [{ ...d, favorite: !d.favorite }, ...restD] });
							}}>{`favorite ${d.favorite}`}</button>
					</div>
				);
			})}
		</div>
	);
};

export default App;
