//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

const Contador = (props) => {
	return (
		<div className="contador">
			<div className="reloj">
				<i className="fas fa-clock"></i>
			</div>
			<div className="tercero">{props.digitoTres % 10}</div>
			<div className="segundo">{props.digitoDos % 10}</div>
			<div className="primero">{props.digitoUno % 10}</div>
		</div>
	);
};

Contador.propTypes = {
	digitoUno: propTypes.number,
	digitoDos: propTypes.number,
	digitoTres: propTypes.number,
};

let counter = 0;
setInterval(() => {
	let tres = Math.floor(counter / 100);
	let dos = Math.floor(counter / 10);
	let uno = Math.floor(counter / 1);
	counter++;

	//render your react application
	ReactDOM.render(
		<Contador digitoUno={uno} digitoDos={dos} digitoTres={tres} />,
		document.querySelector("#app")
	);
}, 1000);
