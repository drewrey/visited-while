var { ActionButton } = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = ActionButton({
  id: 'visited-while',
  label: 'Visited While',
  icon: './data/icon-16.png',
  onClick: visitedWhile
});

function visitedWhile(state) {
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
