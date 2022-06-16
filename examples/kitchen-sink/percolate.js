function importJS(path) {
  requestIdleCallback(() => {
    import(path)
    .then(() => {
      console.log(`imported ${path}`);
    })
    .catch(console.log);
  });
}

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const nodeName = entry.target.nodeName.toLowerCase();
      importJS(`${observer.baseImportPath}${nodeName}.js`);
      observer.unobserve(entry.target);
    }
  });
});

export default function Percolate({ baseURL, tagPartial }) {
  const snapshots = document.evaluate(
    `//*[starts-with(name(), "${tagPartial}")]`,
    document.body,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for(let i = 0; i < snapshots.snapshotLength; i++) {
    const node = snapshots.snapshotItem(i);
    const nodeName = node.nodeName.toLowerCase();
    const loadOnView = !!node.dataset.loadonview;

    if(loadOnView) {
      intersectionObserver.baseImportPath = baseURL;
      intersectionObserver.observe(node);
    } else {
      importJS(`${baseURL}${nodeName}.js`);
    }
  }
}