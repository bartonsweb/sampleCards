import React, { useState, useEffect, useRef } from 'react';
import './App.css';

var data = [
	{ id: 1, text: 'A', favorite: false, opacity: 1 },
	{ id: 2, text: 'B', favorite: false, opacity: 1 },
	{ id: 3, text: 'C', favorite: false, opacity: 1 },
	{ id: 4, text: 'D', favorite: false, opacity: 1 },
	{ id: 5, text: 'E', favorite: false, opacity: 1 },
	{ id: 6, text: 'F', favorite: false, opacity: 1 },
	{ id: 7, text: 'G', favorite: false, opacity: 1 },
	{ id: 8, text: 'H', favorite: false, opacity: 1 },
	{ id: 9, text: 'I', favorite: false, opacity: 1 },
	{ id: 10, text: 'J', favorite: false, opacity: 1 },
	{ id: 11, text: 'K', favorite: false, opacity: 1 },
	{ id: 12, text: 'L', favorite: false, opacity: 1 },
	{ id: 13, text: 'M', favorite: true, opacity: 1 },
	{ id: 14, text: 'N', favorite: true, opacity: 1 },
	{ id: 15, text: 'O', favorite: true, opacity: 1 },
];

const App = () => {
	const [hash, setHash] = useState({
		catsdata: data,
		notFavoriteCatsData: [],
		showFav: false,
		sortByLastWord: false,
	});
	const node = useRef();

	// const opacityCardHandler = (e) => {
	// 	console.log('e', e);
	// 	if (node.current.contains(e.target)) {

	// 		node.current.style.opacity = 1;
	// 		return;
	// 	}
	// 	// outside click
	// };

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
					<div ref={node} key={d.id} style={{ backgroundColor: d.favorite ? '#da7878' : '#f5f699' }}>
						<div
							className='card'
							style={{ opacity: `${d.opacity}` }}
							onClick={(event) => {
								// console.log(
								// 	'e.target class=>',
								// 	event.target.className,
								// 	'@@id=>',
								// 	event.target.children[0].innerText,
								// 	'##d.id=>',
								// 	toString(d.id)
								// );
								const restD = hash.catsdata.filter((el) => el.id !== d.id);

								if (event.target.className === 'card' && event.target.children[0].innerText != d.id) {
									setHash({ ...hash, catsdata: [...restD, { ...d, opacity: 0.1 }] });
									console.log('Hash', hash);
								} else {
									setHash({ ...hash, catsdata: [...restD, { ...d, opacity: 0.5 }] });
									console.log('elseHash', hash);
								}
							}}>
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
					</div>
				);
			})}
		</div>
	);
};

export default App;
