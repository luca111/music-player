import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Player.scss";
import ProgressBar from "./ProgressBar";
import playIcon from "../assets/play_circle_outline-24px.svg";
import pauseIcon from "../assets/pause_circle_outline-24px.svg";
import { getFormattedTime } from "../Utils";

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
    this.player = React.createRef();

    this.state = {
      currentTime: 0
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    this.player.addEventListener("timeupdate", this.updateTime);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.activeTrack &&
      prevProps.activeTrack.trackId !== this.props.activeTrack.trackId
    ) {
      this.setState({
        currentTime: 0
      });
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", this.updateTime);
  }

  updateTime(e) {
    this.setState({
      currentTime: e.target.currentTime
    });
  }

  render() {
    const { collection, activeTrack } = this.props;
    const { currentTime } = this.state;

    let track;
    if (collection.tracks.length !== 0 && activeTrack && activeTrack.trackId) {
      track = collection.tracks.find(t => t.trackId === activeTrack.trackId);
    }

    let iconToShow;
    if (track) {
      if (this.player.paused) {
        iconToShow = playIcon;
      } else {
        iconToShow = pauseIcon;
      }
    }

    return (
      <div className="Player">
        {track && (
          <>
            <img src={`/public/${track.trackId}.jpg`} alt="track image" />
            <div className="track-info">
              <p className="track-name">{track.trackName}</p>
              <p className="artist-name">{track.artistName}</p>
            </div>
            <div className="time-info">
              <span>{getFormattedTime(currentTime)}</span>
              <ProgressBar
                currentTime={currentTime}
                duration={this.player.duration}
              />
              <span>
                {this.player.duration
                  ? getFormattedTime(this.player.duration)
                  : "0:00"}
              </span>
            </div>
            <div
              className="play-pause"
              dangerouslySetInnerHTML={{ __html: iconToShow }}
              onClick={() =>
                this.player.paused ? this.player.play() : this.player.pause()
              }
            />
          </>
        )}
        <audio
          ref={elem => (this.player = elem)}
          src={track ? `/public/${track.trackId}.mp3` : undefined}
          autoPlay
        />
      </div>
    );
  }
}

Player.propTypes = {
  collection: PropTypes.array.isRequired,
  activeTrack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  collection: state.collection,
  activeTrack: state.activeTrack
});

export default connect(mapStateToProps, {})(Player);
