import { hot } from 'react-hot-loader/root';
import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
// const Home = Loadable({
//     loader: () => import('./components/Home'),
//     loading: () => <div>Loading...</div>,
// });
class App extends  React.Component {
    render () {
        return (
            <Router>
                <div>
                    <div>这是不变的1111122000000002</div>
                    <Route path="/home" component={Home}/>
                </div>
            </Router>
        );
    }
}
export default hot(App);
