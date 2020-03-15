import React from "react";
import PropTypes from "prop-types";
import "./TrackList.scss";
import { connect } from "react-redux";
import { fetchCollection } from "../actions/collectionActions";
import TrackListItem from "./TrackListItem";
import Spinner from "./Spinner";

class TrackList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCollection();
  }
  render() {
    const { collection } = this.props;

    if (collection.tracks.length === 0) {
      return <Spinner />;
    }

    return (
      <table className="TrackList">
        <thead>
          <tr>
            <th className="icon-cell" />
            <th className="extra-cell">Track</th>
            <th className="extra-cell">Artist</th>
            <th className="extra-cell">Album</th>
            <th className="extra-cell">Length</th>
          </tr>
        </thead>
        <tbody>
          {collection.tracks.map(track => (
            <TrackListItem key={track.trackId} track={track} />
          ))}
        </tbody>
      </table>
    );
  }
}

TrackList.propTypes = {
  collection: PropTypes.object.isRequired,
  fetchCollection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  collection: state.collection
});

export default connect(
  mapStateToProps,
  { fetchCollection }
)(TrackList);
