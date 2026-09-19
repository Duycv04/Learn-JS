// tạo object
const user = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
  isStudent: true,
};

console.log(user);

//truy cập object

console.log(user.name);
console.log(user.age);
console.log(user.city);

console.log(user["name"]);
console.log(user["age"]);

//thêm sử xóa

const student = {
  name: "Duy",
  age: 20,
};

// Thêm
student.email = "duy@gmail.com";
console.log(student);

// Sửa
student.age = 21;
console.log(student);

// Xóa
delete student.email;
console.log(student);

//  nested object
const person = {
  name: "Duy",
  address: {
    city: "Bắc Giang",
    district: "Việt Yên",
    country: "Vietnam",
  },
};

console.log(person.address.city);
console.log(person.address.district);
console.log(person.address.country);

//method

const account = {
  username: "duy",

  sayHello() {
    console.log("Hello");
  },
};

account.sayHello();

// Method sử dụng this

const account2 = {
  name: "Duy",
  age: 20,

  introduce() {
    console.log(`Tôi tên là ${this.name}, tôi ${this.age} tuổi`);
  },
};

account2.introduce();

// object + this
const product = {
  name: "iPhone",
  price: 20000000,

  showInfo() {
    console.log(`Tên: ${this.name}`);
    console.log(`Giá: ${this.price}`);
  },

  getPrice() {
    return this.price;
  },
};

product.showInfo();

console.log(product.getPrice());

// objecj key / values / entries

const employee = {
  name: "Duy",
  age: 20,
  position: "Developer",
};

// keys

console.log(Object.keys(employee));

// values

console.log(Object.values(employee));

// entries

console.log(Object.entries(employee));

// for .. in
const userInfo = {
  name: "Duy",
  age: 20,
  city: "Bắc Giang",
};

for (const key in userInfo) {
  console.log(key);
}

for (const key in userInfo) {
  console.log(key, userInfo[key]);
}

// PHẦN 10: OBJECT ENTRIES
for (const [key, value] of Object.entries(userInfo)) {
  console.log(`${key}: ${value}`);
}

//object + function

function createUser(name, age, city) {
  return {
    name,
    age,
    city,
  };
}
const newUser = createUser("Duy", 20, "Bắc Giang");

console.log(newUser);
