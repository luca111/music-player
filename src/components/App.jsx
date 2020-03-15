import React from "react";
import PropTypes from "prop-types";
import TrackList from "./TrackList";
import Player from "./Player";
import "./App.scss";
import "normalize.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { activeTrack } = this.props;

    return (
      <div className="App">
        <h1>Music Player</h1>
        <TrackList />
        {activeTrack.trackId && <Player />}
      </div>
    );
  }
}

App.propTypes = {
  activeTrack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  activeTrack: state.activeTrack
});

export default connect(mapStateToProps, {})(App);
