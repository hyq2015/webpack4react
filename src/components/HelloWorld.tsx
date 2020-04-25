import * as React from 'react';
import {Link} from 'react-router-dom';
import {PageFrame} from './PageFrame';
import '../styles/HelloWorld.less';

class HelloWorld extends React.Component<{auth: boolean; name: string}, {}> {

    componentDidMount() {
        // connect(mapStateToProps, mapDispatchToProps)
        // this.props.helloActions.changeName('Ricky1122');

        // connect(mapStateToProps)
        // this.props.dispatch(testAction1.testAction1('ricky'));
        console.log(this.props);
    }
    handleClick() {
    }
    render() {
        return (
            <PageFrame {...this.props}>
                <div className='page-hello'>
                    <h1>hello world!</h1>
                    <h2>
                        <a href='https://reactjs.org/'>React document</a>
                    </h2>
                    <h2>
                        <a href='https://github.com/hyq2015'>Visit Ricky&apos;s github url!</a>
                    </h2>
                    <div
                        className='home'
                    >
                        <Link to='/home'>home</Link>
                    </div>
                    <p>{this.props.name}</p>
                    <p onClick={this.handleClick.bind(this)}>change name</p>
                </div>
            </PageFrame>

        );
    }
}

export default HelloWorld;
