module('wait_selector', [], function(imports){
  return Promise.resolve(function(parentNode, isMatchFunc, handlerFunc, observeSubtree, disconnectAfterMatch) {
    var defaultIfUndefined = function(val, defaultVal) {
      return (typeof val === "undefined") ? defaultVal : val;
    };

    var observeSubtree = defaultIfUndefined(observeSubtree, false);
    var disconnectAfterMatch = defaultIfUndefined(disconnectAfterMatch, false);

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
          for (var i = 0; i < mutation.addedNodes.length; i++) {
            var node = mutation.addedNodes[i];
            if (isMatchFunc(node)) {
              handlerFunc(node);
              if (disconnectAfterMatch) observer.disconnect();
            };
          }
        }
      });
    });

    observer.observe(parentNode, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: observeSubtree
    });
  })
})