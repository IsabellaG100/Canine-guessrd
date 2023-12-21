// TimerStore.js
import { makeAutoObservable } from 'mobx';

class TimerStore {
  timer = 5; // Initial timer value in seconds
  timerId = null;

  constructor() {
    makeAutoObservable(this);
  }

  startTimer() {
    this.timerId = setInterval(() => {
      if (this.timer > 0) {
        this.timer -= 1;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  resetTimer() {
    this.timer = 5;
  }
}

const timerStore = new TimerStore();
export default timerStore;
