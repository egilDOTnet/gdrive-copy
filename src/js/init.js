// Requires
var eventListeners = require('./event-listeners');

$(function() {
  // everything is rendered on the same page, so event listeners can be added all at once
  eventListeners.addSelectButtonListeners();
  eventListeners.addStartFormListeners();
  eventListeners.addResumeFormListeners();
  eventListeners.addDeleteTriggerButtonListeners();
});
