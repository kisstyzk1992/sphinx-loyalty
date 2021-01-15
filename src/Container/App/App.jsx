import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import React from "react";
import theme from "../../Common/Themes/Theme";
import styles from "./styles";
import Routers from "./../../Router/Router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

App.propTypes = {};

function App(props) {
  // const { classes } = props
  // console.log("props: ", props)
  function showContentMenus(Routers) {
    var result = null;
    if (Routers.length > 0) {
      result = Routers.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>{showContentMenus(Routers)}</Router>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
