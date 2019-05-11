import React from "react";
import "../styles/404.scss";
import PageFrame from "./PageFrame";
export default class Page404 extends React.Component {
    render () {
        return (
            <PageFrame>
                <div className="page-not-found">
                    <h1>404</h1>
                    <h1>Page Not Found!</h1>
                </div>
            </PageFrame>
        );
    }
}
