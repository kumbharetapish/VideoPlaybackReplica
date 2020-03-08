import React from "react";
import classes from "./VideoCard.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { WATCH_PAGE_LINK } from "../../Uilit/Route";

const VideoCard = props => {
  return (
    <div
      className={[
        classes.VideoCard,
        props.isPlaylist ? classes.PlaylistCard : null
      ].join(" ")}
    >
      <Link to={ WATCH_PAGE_LINK + props.id}>
        <img
          className={classes.VideoThumbnail}
          src={
            props.id === true
              ? "https://demo.accesspressthemes.com/wordpress-plugins/everest-tab/wp-content/plugins/everest-tab/assets/images//thumbnail-default.jpg"
              : props.thumbnail
          }
          alt={props.title}
        />
        <h3 className={classes.VideoTitle}>{props.title}</h3>
      </Link>
    </div>
  );
};

VideoCard.propTypes = {
  id: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string
};

export default VideoCard;
