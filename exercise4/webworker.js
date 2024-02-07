//Web worker Script
let i = 0
//timeCounter Function
const timeCounter = () => {
  i = i + 1
  const a = {
    'time': new Date(),
    'num': i
  }
  postMessage(a);

  setTimeout("timeCounter()", 1000);
}
timeCounter();