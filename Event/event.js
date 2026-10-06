function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (!this.events[eventName]) {
    this.events[eventName] = [];
  }

  this.events[eventName].push(callback);
};

EventEmitter.prototype.emit = function (eventName, data) {
  if (!this.events[eventName]) return;

  this.events[eventName].forEach((callback) => callback(data));
};

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(`User ${user} đã đăng nhập`);
});

emitter.on("login", () => {
  console.log("Gửi thông báo welcome email");
});

emitter.emit("login", "Duy");

const button = {
  textContent: "Click me",
  listeners: {},
  addEventListener(eventName, handler) {
    this.listeners[eventName] = handler;
  },
  click() {
    if (this.listeners.click) {
      this.listeners.click({
        type: "click",
        target: this,
      });
    }
  },
};

button.addEventListener("click", (event) => {
  console.log(`Sự kiện: ${event.type}`);
  console.log(`Target: ${event.target.textContent}`);
  button.textContent = "Đã click";
});

button.click();
console.log("Nút sau click:", button.textContent);
