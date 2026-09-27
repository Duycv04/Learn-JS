const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    gender: "Nam",
    math: 8,
    english: 7,
    javascript: 9,
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    age: 21,
    gender: "Nữ",
    math: 9,
    english: 8,
    javascript: 8,
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    age: 19,
    gender: "Nam",
    math: 6,
    english: 5,
    javascript: 7,
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    age: 20,
    gender: "Nữ",
    math: 7,
    english: 9,
    javascript: 8,
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    age: 22,
    gender: "Nam",
    math: 5,
    english: 6,
    javascript: 4,
  },
];

// tính điểm trung bình
function dtbStudents(student) {
  return (student.math + student.english + student.javascript) / 3;
}
//xếp loại
function xeploai(student) {
  const diem = dtbStudents(student);

  if (diem >= 8) {
    return "Giỏi";
  } else if (diem >= 6.5) {
    return "Khá";
  } else if (diem >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}
//hiển thị 1 sinh viên
function showonesv(student) {
  console.log(
    `ID: ${student.id} | ` +
      `Tên: ${student.name} | ` +
      `Tuổi: ${student.age} | ` +
      `Giới tính: ${student.gender} | ` +
      `ĐTB: ${dtbStudents(student).toFixed(2)} | ` +
      `Xếp loại: ${xeploai(student)}`,
  );
}
//hiển thị toàn bộ sinh viên
function showallstudent() {
  if (students.length === 0) {
    console.log(" Danh sách trống");
    return;
  }
  for (let i = 0; i < students.length; i++) {
    showonesv(students[i]);
  }
}
//tạo id mới
function taoID() {
  if (students.length === 0) {
    return 1;
  }
  let maxId = students[0].id;
  for (let i = 1; i < students.length; i++) {
    if (students[i].id > maxId) {
      maxId = students[i].id;
    }
  }
  return maxId + 1;
}
// thếm sinh viên
function themsv() {
  rl.question("Nhập tên: ", (name) => {
    if (name.trim() === "") {
      console.log("Tên không được để trống.");
      showMenu();
      return;
    }

    rl.question("Nhập tuổi: ", (ageInput) => {
      const age = Number(ageInput);

      if (!Number.isInteger(age) || age <= 0) {
        console.log("Tuổi không hợp lệ.");
        showMenu();
        return;
      }

      rl.question("Nhập giới tính: ", (gender) => {
        rl.question("Nhập điểm Toán: ", (mathInput) => {
          const math = Number(mathInput);

          if (math < 0 || math > 10) {
            console.log("Điểm Toán phải từ 0 đến 10.");
            showMenu();
            return;
          }

          rl.question("Nhập điểm Tiếng Anh: ", (englishInput) => {
            const english = Number(englishInput);

            if (english < 0 || english > 10) {
              console.log("Điểm Tiếng Anh phải từ 0 đến 10.");
              showMenu();
              return;
            }

            rl.question("Nhập điểm JavaScript: ", (javascriptInput) => {
              const javascript = Number(javascriptInput);

              if (javascript < 0 || javascript > 10) {
                console.log("Điểm JavaScript phải từ 0 đến 10.");
                showMenu();
                return;
              }

              const newStudent = {
                id: generateId(),
                name: name.trim(),
                age: age,
                gender: gender.trim(),
                math: math,
                english: english,
                javascript: javascript,
              };

              students.push(newStudent);

              console.log("\nThêm sinh viên thành công.");

              showStudent(newStudent);

              showMenu();
            });
          });
        });
      });
    });
  });
}
// xóa sinh vien
function xoasv() {
  rl.question("Nhập id cần xóa", (idInput) => {
    const id = Number(idInput);

    const index = students.findIndex((student) => {
      return student.id === id;
    });
    if (index === -1) {
      console.log("Không tìm thấy sinh viên");
      menu();
      return;
    }
    const deletesv = students[index];
    students.splice(index, 1);
    console.log(`Đã xóa sinh viên ${deletesv.name}`);
    menu();
  });
}
//tìm kiếm sinh viên
function timtheoid() {
  rl.question("Nhập ID cần tìm: ", (idInput) => {
    const id = Number(idInput);

    const student = students.find((student) => {
      return student.id === id;
    });

    if (student) {
      console.log("\n===== KẾT QUẢ =====");

      showStudent(student);
    } else {
      console.log("Không tìm thấy sinh viên.");
    }

    showMenu();
  });
}
//tìm kiếm theo tên
function timkiemtheoten() {
  rl.question("Nhập tên cần tìm: ", (keyword) => {
    keyword = keyword.trim().toLowerCase();

    if (keyword === "") {
      console.log("Tên tìm kiếm không được để trống.");

      showMenu();

      return;
    }

    const result = students.filter((student) => {
      return student.name.toLowerCase().includes(keyword);
    });

    console.log("\n===== KẾT QUẢ =====");

    if (result.length === 0) {
      console.log("Không tìm thấy sinh viên.");
    } else {
      result.forEach((student) => {
        showStudent(student);
      });
    }

    showMenu();
  });
}
//cập nhâtj điểm
function capnhatdiem() {
  rl.question("Nhập id cần sửa điểm", (idInput) => {
    const id = Number(idInput);

    const student = students.find((student) => {
      return student.id === id;
    });
    if (!student) {
      console.log("Không tìm thấy sinh viên");
      menu();
      return;
    }
    console.log("\n Hiển thị thông tin");
    menu(student);

    rl.question("Nhập điểm toán", (mathInput) => {
      const math = Number(mathInput);
      if (math < 0 || math > 10) {
        console.log("Nhập điểm từ 0 tới 10");
        menu();
        return;
      }
      rl.question("Nhập điểm tiếng anh", (englishInput) => {
        const english = Number(englishInput);
        if (english < 0 || english > 10) {
          console.log("Nhập điểm tiếng anh từ 0 tới 10");
          menu();
          return;
        }
        rl.question("Nhập điểm js", (javascriptInput) => {
          const javascript = Number(javascriptInput);
          if (javascript < 0 || javascript > 10) {
            console.log("Nhập điểm từ o tới 10");
            menu();
            return;
          }
          student.math = math;
          student.english = english;
          student.javascript = javascript;
          console.log("\n Cập nhật thành công");
          showonesv(student);
          menu();
        });
      });
    });
  });
}
// sắp xếp điểm giảm dần
function sapxepdiem() {
  students.sort((a, b) => {
    return calculateAverage(b) - calculateAverage(a);
  });
  console.log("Danh sách");
  students.forEach((student, index) => {
    console.log(`${index + 1}.`);
    showonesv(student);
  });
  menu();
}
//menu
function menu() {
  console.log("--------------Menu------------------");
  console.log("1. Hiển thị danh sách");
  console.log("2. Thêm sinh viên");
  console.log("3. Xóa sinh viên");
  console.log("4. Tìm sinh viên theo ID");
  console.log("5. Tìm sinh viên theo tên");
  console.log("6. Cập nhật điểm");
  console.log("7. Sắp xếp điểm");
  console.log("0. Thoát");

  rl.question("Nhập lựa chọn: ", (luachon) => {
    switch (luachon) {
      case "1":
        showallstudent();
        break;
      case "2":
        themsv();
        break;
      case "3":
        xoasv();
        break;
      case "4":
        timtheoid();
        break;
      case "5":
        timkiemtheoten();
        break;
      case "6":
        capnhatdiem();
        break;
      case "7":
        sapxepdiem();
        break;
      case "0":
        rl.close();
      default:
        console.log("Lựa chọn không hợp lệ");
        menu();
        break;
    }
  });
}
menu();
