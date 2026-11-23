(() => {
  const selector = '.not-accessible';

  function unhide(root = document) {
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;

    if (root instanceof Element && root.matches(selector)) {
      root.removeAttribute('class');
    }

    root.querySelectorAll?.(selector).forEach((element) => {
      element.removeAttribute('class');
    });
  }

  // Handle elements already present when the page loads.
  unhide();

  // Handle comments inserted later, or elements that receive the class later.
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') {
        unhide(mutation.target);
      } else {
        mutation.addedNodes.forEach((node) => unhide(node));
      }
    }
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['class']
  });
})();
