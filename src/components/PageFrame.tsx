import * as React from 'react';
import '../styles/App.scss';
export class PageFrame extends React.Component<{}, {}> {
    componentDidMount() {
    }
    render() {
        return (
            <div className='x-page-frame'>{this.props.children}</div>
        );
    }
}

