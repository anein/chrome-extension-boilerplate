(() => {
  // Do something on init the popup script .
  function onInit() {
    chrome.storage.local.get((items: any) => {
      // console.log("Background data", items);
    });
  }

  // Call it!
  onInit();
})();
