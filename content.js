// Iniezione di script nella pagina Electronic Ars per monitorare gli eventi di accesso
(function() {
  // Funzione per inviare i dettagli dell'accesso al background script
  function sendLoginDetailsToBackground(cookie) {
    chrome.runtime.sendMessage({ action: "loginDetected", cookie: cookie });
  }

  // Monitora gli eventi di accesso sulla pagina Electronic Ars
  chrome.cookies.onChanged.addListener(function(changeInfo) {
    if (changeInfo.cause === "explicit" && changeInfo.cookie.domain === "electronic-ars.com") {
      sendLoginDetailsToBackground(changeInfo.cookie);
    }
  });
})();
