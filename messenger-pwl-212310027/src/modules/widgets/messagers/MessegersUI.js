import React, { useState, useEffect, useRef } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment"; // Import moment library

const StylesMessager = {
  chatBox: {
    minHeight: "200px",
    maxHeight: "45vh",
    overflowY: "auto",
  },
};

const getDateDisplay = (date) => {
  const today = moment().startOf("day");
  const messageDate = moment(date);

  if (messageDate.isSame(today, "day")) {
    return "Today";
  } else if (messageDate.isSame(today.clone().subtract(1, "day"), "day")) {
    return "Yesterday";
  } else {
    return messageDate.format("MMM DD, YYYY");
  }
};

export default function MessengersUI() {
  const [myChat, setMyChat] = useState([
    { id: 1, message: "Hi", from: "sender", date: "2024-02-22 10:30:00" },
    { id: 2, message: "Iya", from: "receiver", date: "2024-02-22 10:35:00" },
    {
      id: 3,
      message: "Apakah itu Micro-Frontend ?",
      from: "sender",
      date: "2024-02-22 10:50:00",
    },
    {
      id: 4,
      message: "Kaga tau",
      from: "receiver",
      date: "2024-02-22 10:52:00",
    },
    {
      id: 5,
      message: "Apaan dah",
      from: "receiver",
      date: "2024-02-22 10:52:00",
    },
    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.",
      from: "sender",
      date: "2024-02-22 11:00:00",
    },
    {
      id: 7,
      message: "Bijiiii",
      from: "receiver",
      date: "2024-02-22 12:12:00",
    },
  ]);

  const [writeChat, setWriteChat] = useState(""); // State untuk value chat dari textbox

  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [myChat]);

  const handleSendChat = (e) => {
    e.preventDefault();
    const objChat = {
      id: myChat.length + 1,
      message: writeChat,
      from: "sender", // Ganti menjadi "sender"
      date: moment().format("YYYY-MM-DD HH:mm"), // Format tanggal sesuai format ISO 8601
    };
    setMyChat([...myChat, objChat]);
    setWriteChat(""); // Reset nilai input chat setelah submit
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={StylesMessager.chatBox}
        >
          {/* Menggunakan ChatBody untuk merender daftar pesan */}
          <ChatBody data={myChat} getDateDisplay={getDateDisplay} />
          {/* Ref untuk scroll ke bawah */}
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form method="post" autoComplete="off" onSubmit={handleSendChat}>
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon btn-success",
                  type: "submit",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
