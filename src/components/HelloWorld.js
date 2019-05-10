import React from "react";
import {Link, withRouter} from "react-router-dom";
import "../styles/HelloWorld.less";

class HelloWorld extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        console.log(this.props.router);
    }
    render () {
        return (
            <div className="page-hello">
                <h1>hello world!</h1>
                <h2>
                    <a href="https://reactjs.org/">React document</a>
                </h2>
                <h2>
                    <a href="https://github.com/hyq2015">Visit Ricky's github url!</a>
                </h2>
                <div
                    className="home"
                >
                    <Link to="/404">home</Link>
                </div>
            </div>
        );
    }
}
export default withRouter(HelloWorld)
