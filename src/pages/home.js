import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";


import Scream from "../components/Scream";
import Profile from "../components/profile";

import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

class Home extends Component {
  
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream  key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
        <Profile>

        </Profile>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(Home);
