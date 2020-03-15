import React from "react";
import PropTypes from "prop-types";
import soundIcon from "../assets/volume_up-24px.svg";
import { connect } from "react-redux";
import { playTrack } from "../actions/playerActions";
import { getFormattedTime } from "../Utils";
import "./TrackListItem.scss";

class TrackListItem extends React.PureComponent {
  render() {
    const { track, playTrack, playingTrack } = this.props;

    const isSelected = track.trackId === playingTrack.trackId;

    return (
      <tr
        className={`TrackListItem ${
          isSelected ? "TrackListItem-selected" : ""
        }`}
        onClick={() => playTrack(track.trackId)}
      >
        <td>
          {isSelected && (
            <div
              className="sound-icon"
              dangerouslySetInnerHTML={{
                __html: soundIcon
              }}
            />
          )}
        </td>
        <td>{track.trackName}</td>
        <td>{track.artistName}</td>
        <td className="extra-cell">{track.albumName}</td>
        <td className="extra-cell">
          {getFormattedTime(track.lengthInSeconds)}
        </td>
      </tr>
    );
  }
}

TrackListItem.propTypes = {
  playingTrack: PropTypes.object.isRequired,
  playTrack: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  playingTrack: state.activeTrack
});

export default connect(
  mapStateToProps,
  { playTrack }
)(TrackListItem);
