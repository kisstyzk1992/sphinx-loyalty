import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Grid, Box, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

RegistrationForm.propTypes = {};

function RegistrationForm(props) {
  const { classes } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <span className={classes.title}>REGISTRATION</span>
      </div>
      <div className={classes.content}>
        <form>
          <Grid container>
            <Grid item md={12}>
              <TextField
                id="outlined-basic"
                type="TextField"
                label="Username"
                variant="outlined"
                className={classes.textField}
              />
              <br />
              <br />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-basic-email"
                type="TextField"
                label="Email"
                variant="outlined"
                className={classes.textField}
              />
              <br />
              <br />
            </Grid>
            <Grid item md={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className={classes.textField}
              />
              <br />
              <br />
              <TextField
                id="outlined-password-confirm-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className={classes.textField}
              />
            </Grid>

            <Grid item md={12}>
              <Box display="flex" flexDirection="row-reverse" mt={2}>
                <Box ml={1}>
                  <Button variant="contained" type="Submit">
                    Cancel
                  </Button>
                </Box>
                <Button
                  variant="contained"
                  startIcon={<SaveIcon />}
                  color="primary"
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(RegistrationForm);
