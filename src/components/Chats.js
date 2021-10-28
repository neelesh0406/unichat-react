import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

export default function Chats() {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="0b06725f-2ee4-4a04-b974-97d7d4336b2d"
        userName="."
        userSecret="."
      />
    </div>
  );
}
