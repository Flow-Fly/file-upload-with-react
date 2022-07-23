import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import RubberDuckList from "./Pages/RubberDuckList";
import CreateDuck from "./Pages/CreateDuck";
import OneDuck from "./Pages/OneDuck";
import SignUp from "./Pages/AuthSignUp";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<PrivateRoute />}>
					<Route path="/create" element={<CreateDuck />} />
					<Route path="/list" element={<RubberDuckList />} />
				</Route>
				<Route path="/list/:id" element={<OneDuck />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</div>
	);
}

export default App;
