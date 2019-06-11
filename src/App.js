import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//local
import "./styles/app.scss";
import { Home, Blog, SingleBlog } from "./screens";
import { Header, Footer } from "./components/elements";
function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/blog" component={Blog} />
					<Route path="/singleblog" component={SingleBlog} />
					<Route component={() => <span>404</span>} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
