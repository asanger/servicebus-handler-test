const eventSourceDb = require('../db/eventSource');

module.exports.command = 'command.user.create';

module.exports.listen = function(command, cb) {
    const { bus } = this;
    console.log(command);
    eventSourceDb.writeMessage('message');
};
