
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from './containers/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import Login from "./containers/Auth/Login/Login";
import Register from "./containers/Auth/Register/Register";
import { Toaster } from 'react-hot-toast';
import Profile from "./containers/Profile/Profile";
import History from "./containers/History/History";
function App() {
  return (
    <div classname="App">
      <Toaster/>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/movie-detail/:id" component={MovieDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route  path="/profile" component={Profile} />
          <Route  path="/history" component={History} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
