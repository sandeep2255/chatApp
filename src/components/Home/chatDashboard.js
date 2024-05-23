import React, { useState } from "react";
import './chatDashbard.css';



const ChatDashboard = () => {
    const [chatName, setChatName] = useState('');
    const chats = [
        { name: 'Sandeep', fullName:'Sandeep Pradeep' },
        { name: 'Athulya', fullName:'Athulya Anil' },
        { name: 'Aswin', fullName:'Aswin Renjith' },
        { name: 'Emil', fullName:'Emil Saji' },
        { name: 'Prasanth', fullName:'Prasanth J' },
        { name: 'Subin', fullName:'Subin Varghese' },
        { name: 'Abhijith', fullName:'Abhijith R' },
        { name: 'Sebin', fullName:'Sebin Beebi' },
        { name: 'Kishore', fullName:'Kishore D' },
    ];

    
    return (
        <div className="login-container">
            <PeopleView chats={chats} setChatName={setChatName}/>
            <ChatView chatName={chatName}/>
        </div>
    );
}

const PeopleView = ({ chats, setChatName }) => {
    return (
        <div className="column left-side-bar">
        <div className="search">
            <input type="text" className="search-name" placeholder="Search..."/>
        </div>
        <div className="chat-list">
            {chats.map((element, index) => (
                <div key={index} className="list-component main-font" onClick={() => setChatName(element.fullName)}>
                    <div className="">

                    </div>
                    {element.name}
                </div>
            ))}
        </div>
        </div>
    );
}

const ChatView=({chatName})=>{
    return(
        <div className="chat-window">
            <div className="chat-header" style={{ display: chatName !== '' ? 'block' : 'none' }}>
                <span className="main-font display-name">{chatName}</span>
                <div className="online-indicator">
                    <div className="online-logo"></div>
                    <span className="main-font online-text">online</span>
                </div>
            </div>
        </div>
    );
}

export default ChatDashboard;
