import React from "react";
import "../styles/App.scss";
import PropTypes from "prop-types";

export default class PageFrame extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="x-page-frame">{this.props.children}</div>
        );
    }
}
PageFrame.propTypes = {
    children: PropTypes.element
};
