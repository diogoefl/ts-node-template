// main.ts

import dotenv from 'dotenv';

class Main {

  constructor() {
    this.setup();
    this.run();
  }

  private setup() {
    dotenv.config();
  }

  private run() {
    const a = 'Start';

    console.log(a);
  }
}

new Main();
