function createElement(tagName, options = {}) {
  return {
    tagName: tagName.toUpperCase(),
    id: options.id || "",
    className: options.className || "",
    textContent: options.textContent || "",
    children: [],
    listeners: {},
    style: {},

    appendChild(child) {
      this.children.push(child);
      return child;
    },

    addEventListener(eventName, handler) {
      this.listeners[eventName] = handler;
    },

    click() {
      if (this.listeners.click) {
        this.listeners.click();
      }
    },

    remove() {
      this.parent = null;
    },

    setAttribute(name, value) {
      this[name] = value;
    },

    classList: {
      add(name) {
        this._classes = this._classes || new Set();
        this._classes.add(name);
      },
      remove(name) {
        this._classes = this._classes || new Set();
        this._classes.delete(name);
      },
      toggle(name) {
        this._classes = this._classes || new Set();
        if (this._classes.has(name)) {
          this._classes.delete(name);
          return false;
        }
        this._classes.add(name);
        return true;
      },
    },
  };
}

const document = {
  body: createElement("body"),

  getElementById(id) {
    return this._findById(this.body, id);
  },

  querySelector(selector) {
    if (selector.startsWith("#")) {
      return this.getElementById(selector.slice(1));
    }

    if (selector.startsWith(".")) {
      return this._findByClass(this.body, selector.slice(1));
    }

    return this._findByTag(this.body, selector);
  },

  createElement(tagName, options = {}) {
    return createElement(tagName, options);
  },

  _findById(node, id) {
    if (node.id === id) return node;

    for (const child of node.children) {
      const found = this._findById(child, id);
      if (found) return found;
    }

    return null;
  },

  _findByClass(node, className) {
    if (node.className && node.className.split(" ").includes(className)) {
      return node;
    }

    for (const child of node.children) {
      const found = this._findByClass(child, className);
      if (found) return found;
    }

    return null;
  },

  _findByTag(node, tagName) {
    if (node.tagName && node.tagName.toLowerCase() === tagName.toLowerCase()) {
      return node;
    }

    for (const child of node.children) {
      const found = this._findByTag(child, tagName);
      if (found) return found;
    }

    return null;
  },
};

const app = document.createElement("div", { id: "app" });
const title = document.createElement("h1", {
  id: "title",
  textContent: "Xin chào DOM",
});
const button = document.createElement("button", {
  id: "btn",
  className: "primary",
  textContent: "Click me",
});

app.appendChild(title);
app.appendChild(button);
document.body.appendChild(app);

button.addEventListener("click", () => {
  title.textContent = "Bạn đã click nút!";
  button.textContent = "Đã click";
  button.className = "primary active";
});

console.log("Ban đầu:", title.textContent);
button.click();
console.log("Sau khi click:", title.textContent);
console.log("Nút text sau click:", button.textContent);
console.log("Class của nút:", button.className);

// Ví dụ tương tự trong browser thực tế:
// const title = document.getElementById("title");
// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   title.textContent = "Bạn đã click nút!";
//   button.textContent = "Đã click";
// });
