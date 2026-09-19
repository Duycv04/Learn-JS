Vòng lặp - For loop
For( khởi tạo, điều kiện, cập nhật){
//code block
}

While (điều kiện){
//code
}
Điều kiện còn đúng thì tiếp tục lặp

Do .. while lặp ít nhất 1 lần rồi mới kiểm tra điều kiện
Do {} while ();

For .. in duyệt phần tử key/property của Object;
Const user ={
Id: 1,
Name: “Duy”,
Age: 21,
Address: “Bắc Ninh”
}
For (const key in user ){
Console.log(key);
} // lấy key của user
Id name age address

For (const key in user ){
Console.log(key[user]);
}// lấy property của user
1 Duy 21 Bắc Ninh
Break: thoát vòng lặp ngay lập tức
For (let I =0 ; I <=10 ; i++){
If ( I === 5){
Break;
}
Console.log(i);
}// 0 1 2 3 4

Continue: bỏ qua lần lặp hiện tại và tiếp tục lặp
For (let I =0 ; I <=10 ; i++){
If ( I === 5){
continue;
}
Console.log(i);
}// 0 1 2 3 4 6 7 8 9 10
