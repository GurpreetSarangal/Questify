import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./css/Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post-info">
        <Avatar />
        <h4>User Name</h4>
        <small>Timestamp</small>
      </div>
      <div className="post-body">
        <div className="post-question">
        <p>this is test question</p>
        <button className="post-btnAnswer">Answers</button>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-footerAction">
            <ArrowUpwardOutlined/>
            <ArrowDownwardOutlined/>
        </div>
        <RepeatOutlined/>
        <ChatBubbleOutline/>
        <div className="post-footerLeft">
            <ShareOutlined/>
            <MoreHorizOutlined/>
        </div>
      </div>
      <p style={{color: "rgba(0,0,0,0.5)", fontSize: "12px",fontWeight: "bold",margin: "10px 0"}}>1 Answer</p>
      <div style={{margin: "5px 0px 0px 0px ",padding: "5px 0px 0px 20px",borderTop: "1px solid lightgray"}} className="post-answer">
        <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px 5px", borderTop: "1px solid lightgray"}} className="post-answer-container">
            <div style={{ display: "flex",alignItems: "center", marginBottom: "10px", fontSize: "12px", fontWeight: 600, color: "#888",}} className="post-answered">
                <Avatar/>
                <div style={{margin: "0px 10px"}} className="post-info">
                    <p>
                        Username 
                    </p>
                    <span>Timestamp</span>
                </div>
            </div>
            <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
