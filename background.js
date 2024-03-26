chrome.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cause === "explicit" && changeInfo.cookie.domain === "ea.com/login") {
    console.log("Electronic Ars login detected. Cookie details:", changeInfo.cookie);
  }
});
