import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption
          Icon={ThumbUpAltIcon}
          title="Like"
          color="gray"
        ></InputOption>

        <InputOption
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        ></InputOption>

        <InputOption
          Icon={ShareOutlinedIcon}
          title="Share"
          color="gray"
        ></InputOption>

        <InputOption
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        ></InputOption>

        <InputOption
          Icon={SendOutlinedIcon}
          title="Send"
          color="gray"
        ></InputOption>
      </div>
    </div>
  );
});

export default Post;
