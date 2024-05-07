import React, { useState, useEffect } from 'react';

const BotpressChat = () => {
  const [isOpen, setIsOpen] = useState(false); // Changer la valeur initiale de isOpen à false

  useEffect(() => {
    if (isOpen) { // Initialiser le chatbot seulement si isOpen est true
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.botpressWebChat.init({
          'composerPlaceholder': 'Chat with bot',
          'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
          'botName': 'Name',
          'botId': 'b9d4ec2f-88b6-41c8-a7ea-a778fbf5eabd', // Assurez-vous d'utiliser votre propre botId
          'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
          'messagingUrl': 'https://messaging.botpress.cloud',
          'clientId': 'b9d4ec2f-88b6-41c8-a7ea-a778fbf5eabd', // Assurez-vous d'utiliser votre propre clientId
          'enableConversationDeletion': true,
          'showPoweredBy': true,
          'className': 'webchatIframe',

          'hideWidget': false, // Afficher le widget par défaut
          'showCloseButton': true,
          'disableAnimations': true,
          'closeOnEscape': false,
          'showConversationsButton': false,
          'enableTranscriptDownload': false,

          'stylesheet':'https://webchat-styler-css.botpress.app/prod/d3a4d2c1-ba5e-4b63-b920-5052673eeb88/v49358/style.css'
        });

        window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
      };
    }
  }, [isOpen]); 

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999' }}>
      <button onClick={() => setIsOpen(!isOpen)}>Open Chat</button> {/* Bouton pour ouvrir/fermer le chatbot */}
      {isOpen && ( 
        <div className="absolute inset-4">
          <div className="center-div relative h-full w-full overflow-clip rounded-md border border-zinc-200 bg-white p-2 px-0 py-0">
            <div id="webchat" style={{ width: '100%', height: '100%' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotpressChat;
