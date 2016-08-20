var { ToggleButton } = require('sdk/ui/button/toggle');
var ss = require('sdk/simple-storage');
var tabs = require('sdk/tabs');

if (!ss.storage.visits)
    ss.storage.visits = [];

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
        ss.storage.visits.push(entry);
    }
    tabs.on('ready', onReadyWhile);
    current.on('close', function(tab) {
        tabs.removeListener('ready', onReadyWhile);
    });
}
