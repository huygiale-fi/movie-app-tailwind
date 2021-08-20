import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from './containers/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from "./containers/MovieDetails/MovieDetails";
function App() {
  return (
    <div classname="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/movie-detail/:id" component={MovieDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
