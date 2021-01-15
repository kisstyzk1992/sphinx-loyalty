import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './styles';

Home.propTypes = {

};

function Home(props) {
    return (
        <div>
            <h1>Welcome To Admin Home Page</h1>
        </div>
    );
}

export default withStyles(styles)(Home);