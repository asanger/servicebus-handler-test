module.exports.command = "event.user.created";

module.exports.listen = function(command, cb) {
  const { bus } = this;
  console.log(`User Created: ${command}`);
  cb();
};

console.log("test test");
