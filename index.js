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
    console.log(current.url +  ' is open');
    tabs.on('ready', onReadyWhile);
    current.on('close', logClose);
}

function logClose(tab) {
    console.log(tab.url + ' is closed');
    tabs.removeListener('ready', onReadyWhile);
}

function onReadyWhile(tab) {
    console.log('loaded: ', tab.title, tab.url);
}
