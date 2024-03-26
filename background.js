chrome.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cause === "explicit" && changeInfo.cookie.domain === "electronic-ars.com") {
    console.log("Electronic Ars login detected. Cookie details:", changeInfo.cookie);
  }
});
