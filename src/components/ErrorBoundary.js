import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  // componentDidUpdate(prevProps, prevStates) {
  //   if (prevProps.children !== this.props.children) {
  //     console.log(
  //       "ErrorBoundary - component rerendered by UserFinder; setting the hasError state to false"
  //     );
  //     this.setState({ hasError: false });
  //   }
  // }

  // component life-cycle method to catch errors
  componentDidCatch(error) {
    console.log("ErrorBoundary - caught an error");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
