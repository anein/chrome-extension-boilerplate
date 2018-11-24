/**
 * Background script goes here.
 */
(() => {
  /**
   * Run your initial code here.
   */
  function onInit() {
    // console.log("Init");
  }

  // Do something on install
  chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("MyAlarm", { periodInMinutes: 1 });
    //
    chrome.storage.local.set({ data: "value" });
  });

  // Simple alarm call
  chrome.alarms.onAlarm.addListener((alarm) => {
    // console.log("Message from Chrome.Alarm!");
  });

  //
  onInit();
})();
