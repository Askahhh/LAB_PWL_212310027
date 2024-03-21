import React from "react";
import moment from "moment"; // Import moment library

// CSS style for bubble chat
const styleChatItems = {
  chatBubbleItems: {
    display: "flex",
    flexDirection: "column",
  },
  chatBubbleSender: {
    textAlign: "right", // Set textAlign menjadi right untuk pesan pengirim
    backgroundColor: "#a198a7",
    alignSelf: "flex-end",
  },
  chatBubbleReceiver: {
    backgroundColor: "#a83aef",
    alignSelf: "flex-start",
  },
  chatDate: {
    backgroundColor: "#e3e4e8",
    borderRadius: "10px",
    padding: "5px",
    margin: "0 auto",
    marginBottom: "10px",
    maxWidth: "fit-content",
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

export default function ChatBody({ data }) {
  const listdata = data;

  return (
    <div className="chat-items">
      {listdata.map((v, index) => (
        <div
          className="chat-item"
          style={styleChatItems.chatBubbleItems}
          key={index}
        >
          {/* Tampilkan tanggal di tengah chat */}
          {index === 0 || getDateDisplay(v.date) !== getDateDisplay(listdata[index - 1].date) ? (
            <div className="chat-date text-center mb-2" style={styleChatItems.chatDate}>
              {getDateDisplay(v.date)}
            </div>
          ) : null}
          <div
            className={`chat text-white rounded my-2 p-2 ${v.from === "sender" ? "text-end" : ""}`}
            style={
              v.from === "sender"
                ? styleChatItems.chatBubbleSender
                : styleChatItems.chatBubbleReceiver
            }
          >
            <span className="me-3">{v.message}</span>
            <span className="chat-date" style={{ fontSize: "11px" }}>
              {moment(v.date).format("HH:mm")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
