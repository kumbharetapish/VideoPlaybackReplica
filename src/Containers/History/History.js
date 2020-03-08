import React, { Component } from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import HistoryStyle from "./history.module.css";
import { connect } from "react-redux";
import { getVideoList } from "../../WebService/APIcontroller";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
  }

  componentDidMount() {
    getVideoList()
      .then(response => {
        const WatchVideo = response.filter(dataList => {
          return this.props.WatchVid.indexOf(dataList.id) >= 0;
        });
        this.setState({ videoList: WatchVideo });
      })
      .catch(err => {
        alert("Failed => " + err);
      });
  }

  render() {
    const videoCards = this.state.videoList.map(item => {
      return (
        <VideoCard
          key={parseInt(item.id)}
          id={parseInt(item.id)}
          thumbnail={item.thumbnail}
          title={item.title}
        />
      );
    });
    return (
      <div>
        <br />
        <br />
        <h1>History</h1>
        <div className={HistoryStyle.cardWrapper}>{videoCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    WatchVid: state.storeCounter
  };
};

export default connect(mapStateToProps)(History);
