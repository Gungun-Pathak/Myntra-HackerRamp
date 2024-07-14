import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "c49d36a6-c0db-4098-a536-b17bc755f4ca",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "c49d36a6-c0db-4098-a536-b17bc755f4ca",

        botConversationDescription:
          "Our chatbot enhances user experience by negotiating prices in real-time, offering personalized deals based on user data and market trends. Enjoy seamless interactions with rich media,  and secure transactions.",
        composerPlaceholder: "Chat with Myntra Price Negotiator",
        botName: "Myntra Price Negotiator",
        frontendVersion: "v1",
        useSessionStorage: true,
        showBotInfoPage: true,
        theme: "prism",
        themeColor: "#2563eb",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
