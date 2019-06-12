import React from "react";
import {Link} from "react-router-dom";
import PageFrame from "./PageFrame";
import "../styles/HelloWorld.less";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    render() {
        return (
            <PageFrame {...this.props}>
                <div className="page-hello">
                    <h1>hello world!</h1>
                    <h2>
                        <a href="https://reactjs.org/">React document</a>
                    </h2>
                    <h2>
                        <a href="https://github.com/hyq2015">Visit Ricky&apos;s github url!</a>
                    </h2>
                    <div
                        className="home"
                    >
                        <Link to="/home">home</Link>
                    </div>
                </div>
            </PageFrame>

        );
    }
}

export default HelloWorld;
