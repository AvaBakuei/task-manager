import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//local
import "./styles/app.scss";
import { Home, Blog, SingleBlog } from "./screens";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route path="/singleblog" component={SingleBlog} />
					<Route component={() => <span>404</span>} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
