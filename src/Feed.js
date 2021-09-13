import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import { Button } from "@material-ui/core";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon></CreateIcon>
          <form>
            <input type="text"></input>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9"
          ></InputOption>

          <InputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          ></InputOption>

          <InputOption
            Icon={EventNoteIcon}
            title="Event"
            color="#C0CBCD"
          ></InputOption>

          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          ></InputOption>
        </div>
      </div>
      
        {/* Posts */}

    </div>
  );
}

export default Feed;
