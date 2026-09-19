Object là kiểu dữ liệu dùng để lưu trữ nhiều thông tin có liên quan với nhau dưới dạng:
key: value

Ví dụ:
const user = {
name: "Duy",
age: 20,
city: "Bắc Giang"
};

Object trên có 3 property:
name → "Duy"
age → 20
city → "Bắc Giang"

Tạo Object
Cách phổ biến nhất:
const user = {
name: "Duy",
age: 20
};

Object có thể chứa nhiều loại dữ liệu:
const user = {
name: "Duy",
age: 20,
isStudent: true,
score: 8.5
};

Property
Dữ liệu bên trong Object được gọi là property.

const user = {
name: "Duy",
age: 20
};

Có:
name → property
age → property

Cấu trúc:

const object = {
key: value
};

Truy cập Property

Có 2 cách chính.

Dot notation
const user = {
name: "Duy",
age: 20
};

console.log(user.name);
console.log(user.age);
Bracket notation
console.log(user["name"]);
console.log(user["age"]);

Hai cách trên tương đương.

Thêm Property
Có thể thêm property sau khi Object được tạo.

const user = {
name: "Duy"
};

user.age = 20;
user.city = "Bắc Giang";

console.log(user);

Sửa Property
const user = {
name: "Duy",
age: 20
};

user.age = 21;
console.log(user.age);

Kết quả: 21

Xóa Property

Dùng: delete

Ví dụ:
const user = {
name: "Duy",
age: 20,
city: "Bắc Giang"
};

delete user.city;

console.log(user);

Property có nhiều kiểu dữ liệu
Object có thể chứa:
const product = {
name: "iPhone",
price: 20000000,
quantity: 5,
available: true,
description: null
};

10. Object chứa Array
    const user = {
    name: "Duy",
    skills: ["HTML","CSS","JavaScript"]
    };

Truy cập:

console.log(user.skills);
console.log(user.skills[0]);

Object chứa Object

Object có thể chứa Object khác.
const user = {
name: "Duy",

    address: {
        city: "Bắc Giang",
        district: "Việt Yên"
    }

};

Truy cập:
console.log(user.address.city);
console.log(user.address.district);

Đây gọi là nested object.

Object chứa Function

Function bên trong Object được gọi là method.

const user = {
name: "Duy",

    sayHello: function () {
        console.log("Hello");
    }

};

Gọi: user.sayHello();

Method
Có thể viết method ngắn hơn:

const user = {
name: "Duy",
sayHello() {
console.log("Hello");
}
};

user.sayHello();

15. this
    Trong method của Object, this thường đại diện cho Object đang gọi method.
    const user = {

        name: "Duy",

        introduce() {
            console.log(this.name);
        }

    };

user.introduce();

Ở đây: this.name
tương đương: user.name

Kiểm tra Property tồn tại

Dùng:in
Ví dụ:
const user = {
name: "Duy",
age: 20
};

console.log("name" in user);
console.log("email" in user);

Kết quả: true ,false

hasOwnProperty

Có thể kiểm tra property trực tiếp:
console.log(user.hasOwnProperty("name"));

21. Object.keys()

Lấy danh sách key.

const user = {
name: "Duy",
age: 20,
city: "Bắc Giang"
};

console.log(Object.keys(user));
Kết quả: ["name", "age", "city"]

Object.values()
Lấy danh sách value.

console.log(Object.values(user));

Kết quả: ["Duy", 20, "Bắc Giang"]

Object.entries()

Lấy cả key và value.
console.log(Object.entries(user));

Kết quả:
[
["name", "Duy"],
["age", 20],
["city", "Bắc Giang"]
]
