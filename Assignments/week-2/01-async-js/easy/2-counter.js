let count = 0;
function increamentCounter() {
    count++;
    console.log(count);
    setTimeout(increamentCounter,1000);
}
increamentCounter();