import React,{Component} from 'react';


class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(Error,info) {
        this.setState({ hasError : true})

    }

    render() {
        if (this.state.hasError) {
            return <h1>'Oops. There might be an error'</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary;