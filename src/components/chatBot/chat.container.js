import { useState } from "react";
import ChatBot from "./chatBot"
import chatIcon from '../../assets/icon/chat.png'; // Assuming you have a chat icon

export const ChatBotContainer = ()=>{
    const [isChatBotVisible, setIsChatBotVisible] = useState(false);
    const toggleChatBot = () => {
        setIsChatBotVisible(!isChatBotVisible);
      };
        
    return(
        <>
        {isChatBotVisible && <ChatBot />} {/* Conditionally render ChatBot */}
          <button className="chat-toggle-button" onClick={toggleChatBot}>
            <img src={chatIcon} alt="Chat" />
          </button>
        </>
    )
}