import { useState } from "react";
import ChatBot from "./chatBot"
import chatIcon from '../../assets/icon/chat.png'; 

export const ChatBotContainer = ({language})=>{
    const [isChatBotVisible, setIsChatBotVisible] = useState(false);
    const toggleChatBot = () => {
        setIsChatBotVisible(!isChatBotVisible);
      };
        
    return(
        <>
        {isChatBotVisible && <ChatBot language={language}/>} 
          <button className="chat-toggle-button" onClick={toggleChatBot}>
            <img src={chatIcon} alt="Chat" />
          </button>
        </>
    )
}