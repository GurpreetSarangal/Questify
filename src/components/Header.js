import logo1 from "../images/logo1.png";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Button, Input } from "@mui/material";
import "./css/QHeader.css";
import Modal from "react-responsive-modal";
import { Close, ExpandMore } from "@mui/icons-material";
import "react-responsive-modal/styles.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const close = <Close />;
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo1} alt="" />
        </div>
        <div className="header-icons">
          <div className="header-icon">
            <HomeIcon />
          </div>
          <div className="header-icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="header-icon">
            <AssignmentOutlinedIcon />
          </div>
          <div className="header-icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="header-icon">
            <NotificationsOutlinedIcon />
          </div>
          <div className="header-input">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search Question" />
          </div>
          <div className="header-Rem">
            <Avatar />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center={true}
            closeOnOverlayClick={false}
            style={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal-title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal-info">
              <Avatar className="avatar" />
              <div className="modal-scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal-field">
              <Input
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc."
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  value={inputURL}
                  onChange={(e) => setInputURL(e.target.value)}
                  style={{
                    margin: "5px 0px",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: include a link that gives context"
                />
                {
                  inputURL !== "" && <img  style={{height: "40vh", objectFit: "contain"}} src={inputURL} alt="image"/>
                }
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
