import { hot } from 'react-hot-loader/root';
import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.scss";
const HelloWorld = Loadable({
    loader: () => import('./components/HelloWorld'),
    loading: () => <div>Loading...</div>,
});
const Page404 = Loadable({
    loader: () => import('./components/404'),
    loading: () => <div>Loading...</div>,
});
class App extends  React.Component {
    componentDidMount () {
    }

    render () {
        return (
            <Router>
                <div className="page-main">
                    <Route path="/" exact component={HelloWorld}/>
                    <Route path="/404" exact component={Page404}/>
                </div>
            </Router>
        );
    }
}
export default hot(App);
