document.getElementById('marking').addEventListener('click', (event) => {

    function highlightify(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "highlightify"
        });
      }

      function reset(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset"
        });
      }

      function reportError(error) {
        console.error(`Could not highlightify: ${error}`);
      }

      if (event.target.classList.contains("beast")) {
        browser.tabs.query({active: true, currentWindow: true})
        .then(highlightify)
        .catch(reportError);
      }
      else if (e.target.classList.contains("reset")) {
        browser.tabs.query({active: true, currentWindow: true})
          .then(reset)
          .catch(reportError);
      }

});