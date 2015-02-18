window.dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
}
window.dispatchKeyboardEvent = function(target, initKeyboradEvent_args) {
  var e = document.createEvent("KeyboardEvents");
  e.initKeyboardEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
}
window.dispatchTextEvent = function(target, initTextEvent_args) {
  var e = document.createEvent("TextEvent");
  e.initTextEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
}
window.dispatchSimpleEvent = function(target, type, canBubble, cancelable) {
  var e = document.createEvent("Event");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
}