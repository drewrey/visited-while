var { ToggleButton } = require('sdk/ui/button/toggle');
var tabs = require('sdk/tabs');

var button = ToggleButton({
  id: 'visited-while',
  label: 'Visited While',
  icon: './icon-16.png',
  onClick: visitedWhile
});

function visitedWhile(state) {
    button.state("tab", {
       disabled: true
    });
    current = tabs.activeTab;
    function onReadyWhile(tab) {
        if (tab.url == 'about:newtab')
            return {};
        var entry = {
            'while': current.url,
            'visited': tab.url,
            'time': Date().toLocaleString()
        };
        console.log(entry);
    }
    tabs.on('ready', onReadyWhile);
    current.on('close', function(tab) {
        tabs.removeListener('ready', onReadyWhile);
    });
}
