import React, { Component } from "react";
import Aux from "../../hoc/auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.SideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Toolbar drawerTogglerClicked={this.sideDrawerTogglerHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
