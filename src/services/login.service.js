class loginService {
  constructor() {}

  async authenticate(body) {
    await sleep();
    function sleep() {
      //Simulate DB
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    }

    return 'admin';
  }

  async refresh(body) {
    return this;
  }
}

module.exports = loginService;
