/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/index.css";
import AppProvider from "./components/context";

ReactDOM.render(
	<AppProvider>
		<App></App>
	</AppProvider>,
	document.getElementById("root")
);
