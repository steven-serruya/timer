const args = process.argv.slice(2);
const beep = () => {
  process.stdout.write('\x07');
};
const setTimer = (seconds) => {
  if (seconds < 0 || isNaN(seconds) || seconds === null) {
    return;
  }
  setTimeout(() => {
    beep();
  }, seconds * 1000);
};
args.forEach((arg) => {
  const seconds = parseInt(arg);
  setTimer(seconds);
});

