import React from "react";
import classes from "./HomePage.module.css";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { getVideoList } from "../../WebService/APIcontroller";

class HomePage extends React.Component {
  state = {
    videoList: []
  };

  componentDidMount() {
    getVideoList()
      .then(response => {
        console.log(response);
        this.setState({ videoList: [...response] });
      })
      .catch(err => {
        alert("Failed => " + err);
      });
  }

  render() {
    const videoCards = this.state.videoList.map(item => {
      return (
        <VideoCard
          key={item.id}
          id={parseInt(item.id)}
          thumbnail={
            item.id === ""
              ? "https://demo.accesspressthemes.com/wordpress-plugins/everest-tab/wp-content/plugins/everest-tab/assets/images//thumbnail-default.jpg"
              : item.thumbnail
          }
          title={item.title}
        />
      );
    });
    return (
      <div className={classes.MainContainer}>
        <div className={classes.VideoGrid}>{videoCards}</div>
      </div>
    );
  }
}

export default HomePage;
