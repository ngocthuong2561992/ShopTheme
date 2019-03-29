import React, { Component, Fragment } from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

class xshop extends Component {
  
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }
  render() {
    return (
      <Fragment>
        <main>
        <TopMenu />
        <div className="clr10" />
          <Footer />
        </main>
      </Fragment>
    );
  }
}

export default xshop;
