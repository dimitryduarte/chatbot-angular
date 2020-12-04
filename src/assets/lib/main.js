  window.watsonAssistantChatOptions = {
      integrationID: "554ea644-11e1-4293-91e2-1d9d8c9618c7", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "2a70b264-08aa-48c8-abac-9d5cd16eef14", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
