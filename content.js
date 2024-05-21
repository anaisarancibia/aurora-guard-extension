chrome.storage.local.get(['alertShown'], function(result) {
    if (!result.alertShown) {
      // Muestra la alerta
      alert('Se ha detectado un patrón oscuro en la página');
  
      // Guarda en chrome.storage.local que la alerta ha sido mostrada
      chrome.storage.local.set({ alertShown: true });
    }
  });
  