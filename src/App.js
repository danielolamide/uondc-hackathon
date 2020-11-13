import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { MdMenu } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./pages/Search";
import Tender from "./pages/Tender";
import Evaluate from "./pages/Evaluate";
import ConfirmEvaluation from "./pages/ConfirmEvaluation";
import Thanks from "./pages/Thanks";
//import logo from "./logo.svg";

function App() {
	return (
		<Router>
			<div className="flex flex-col">
				<div className="flex items-center justify-between w-full p-2 bg-blue-800">
					<span className="text-xl text-white">UONDC</span>
					<MdMenu color="white" size={25} />
				</div>
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/tender">
						<Tender />
					</Route>
					<Route path="/evaluate">
						<Evaluate />
					</Route>
					<Route path="/confirm-evaluation">
						<ConfirmEvaluation />
					</Route>
					<Route path="/thanks">
						<Thanks />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
