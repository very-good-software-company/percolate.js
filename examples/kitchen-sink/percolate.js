function importJS({ path, success, error }) {
  requestIdleCallback(() => {
    import(path)
    .then(() => success(path))
    .catch(() => error(path));
  });
}

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const nodeName = entry.target.nodeName.toLowerCase();
      importJS({
        path: `${observer.baseImportPath}${nodeName}.js`,
        success: observer.importSuccessCallback,
        error: observer.importErrorCallback
      });
      observer.unobserve(entry.target);
    }
  });
});

export default function Percolate({
  baseURL = '/',
  tagPartial = '',
  successCallback = () => {},
  errorCallback = console.error
}) {
  if(!tagPartial) {
    return console.error('Percolate Error: Missing tagPartial argument');
  }

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
      intersectionObserver.importSuccessCallback = successCallback;
      intersectionObserver.importErrorCallback = errorCallback;
      intersectionObserver.observe(node);
    } else {
      importJS({
        path: `${baseURL}${nodeName}.js`,
        success: successCallback,
        error: errorCallback
      });
    }
  }
}