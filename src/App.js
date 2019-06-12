import { hot } from "react-hot-loader/root";
import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const HelloWorld = Loadable({
        loader: () => import("./components/HelloWorld"),
        loading: () => <div>Loading...</div>
    }),
    Page404 = Loadable({
        loader: () => import("./components/404"),
        loading: () => <div>Loading...</div>
    });
class App extends  React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={ (props) => <HelloWorld {...props} auth={true}/>} />
                    <Route path="/404" component={Page404}/>
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}
export default hot(App);
