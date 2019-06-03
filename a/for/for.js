// // function myFuntion(P1, P2) {
// //     return P1 * P2;
// // }
// // document.getElementById("text").innerHTML = myFuntion(4, 3);

// // var x = myFuntion(2, 3);
// // document.getElementById("text").innerHTML = x;

// // function myFuntion(a, b) {
// //     return a * b;
// // }

// // function toCelsius(f) {
// //     return (5 / 9) * (f - 32);
// // }
// // document.getElementById("text").innerHTML = toCelsius(77);



// var fahrenheit = (77);

// function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }
// console.log("The temperature is " + (toCelsius(77)) + " Celcius");
// document.getElementById("text").innerHTML = "The temperature is " + toCelsius(77) + " Celcius";



// function myFuntion() {
//     var carName = "PS";
//     document.getElementById("text").innerHTML = typeof carName +
//         " " + carName;
// }
// myFuntion();
























var data = {
    "users": [{
            "id": 10,
            "name": "Ethyl Medhurst",
            "email": "noah.hand@example.org",
            "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
            "created_at": "2019-03-26 04:55:04",
            "updated_at": "2019-03-26 04:55:04"
        },
        {
            "id": 9,
            "name": "Eula Lebsack PhD",
            "email": "schroeder.sylvan@example.org",
            "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        },
        {
            "id": 8,
            "name": "Mrs. Kathlyn Parisian DDS",
            "email": "ggrimes@example.net",
            "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        }
    ]
};


var table =
    '<table align="center"><thead><tr><th>Id</th><th>Name</th><th>Email</th><th>Created_at</th><th>Updated_at</th></tr></thead><tbody>';

for (var i = 0; i < data.users.length; i++) {
    table += '<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name + '</td><td>' + data.users[i].email + '</td><td>' + data.users[i].created_at + '</td><td>' + data.users[i].updated_at + '</td></tr>';
}
table += '</tbody></table>';
text.innerHTML = table;




















// // // tạo một function thay cho document.createElement(" ")
// // function Create(nameOfElement) {
// //     return document.createElement(nameOfElement);
// // }
// // //tạo các element
// // var table = Create("table");
// // var thead = Create("thead");
// // var tbody = Create("tbody");

// // var styleAttribute1 = document.createAttribute("style");
// // styleAttribute1.value = "color: red";
// // thead.setAttributeNode(styleAttribute1);

// // //them thead và tbody và thẻ table
// // table.appendChild(thead);
// // table.appendChild(tbody);

// // var trow = Create("tr");
// // thead.appendChild(trow);
// // // tạo một mảng tạm thời
// // var array1 = ["Id", "Name", "Email"];
// // //lấy giá trị trang mảng cho vào th trong thẻ tr
// // for (var i = 0; i < array1.length; i++) {
// //     var th = Create("th");
// //     var text = document.createTextNode(array1[i]);
// //     th.appendChild(text);
// //     trow.appendChild(th);
// // }





// // // // tới phần tbody làm tương tự
// // // var trowBody1 = Create("tr");
// // // tbody.appendChild(trowBody1);
// // // // tạo một mảng tạm thời chứa id,name,email.
// // // var array2 = [data.users[0].id, data.users[0].name, data.users[0].email];
// // // for (var i = 0; i < array2.length; i++) {
// // //   var td = Create("td");
// // //   var text = document.createTextNode(array2[i]);
// // //   td.appendChild(text);
// // //   trowBody1.appendChild(td);
// // // }

// // // var trowBody2 = Create("tr");
// // // tbody.appendChild(trowBody2);
// // // // tạo một mảng tạm thời chứa id,name,email.
// // // var array3 = [data.users[1].id, data.users[1].name, data.users[1].email];
// // // for (var i = 0; i < array3.length; i++) {
// // //   var td = Create("td");
// // //   var text = document.createTextNode(array3[i]);
// // //   td.appendChild(text);
// // //   trowBody2.appendChild(td);
// // // }
// // // var trowBody3 = Create("tr");
// // // tbody.appendChild(trowBody3);
// // // // tạo một mảng tạm thời chứa id,name,email.
// // // var array4 = [data.users[2].id, data.users[2].name, data.users[2].email];
// // // for (var i = 0; i < array4.length; i++) {
// // //   var td = Create("td");
// // //   var text = document.createTextNode(array4[i]);
// // //   td.appendChild(text);
// // //   trowBody3.appendChild(td);
// // // }




// // // ngắn gọn hơn nè sử dụng hai vòng for
// // for (var i = 0; i < data.users.length; i++) {
// //     var trowBody = Create("tr");
// //     tbody.appendChild(trowBody);
// //     var array = [data.users[i].id, data.users[i].name, data.users[i].email];
// //     for (var j = 0; j < array.length; j++) {
// //         var td = Create("td");
// //         var text = document.createTextNode(array[j]);
// //         td.appendChild(text);
// //         trowBody.appendChild(td);
// //     }
// // }

// // document.body.appendChild(table);
























// // // // var users = ['Ben', 'John', 'Sarah'];
// // // // var age = [21, 12, 33];
// // // // var email = ['mail@gmail.com', 'yahoo@yahoo.com', 'tp@gmail.com'];


// // // // var text = document.getElementById('text');
// // // // var table =
// // // //     '<table><thead><tr><th>id</th><th>name</th><th>email</th></tr></thead><tbody>';

// // // // for (var i = 0; i < users.length; i++) {
// // // //     table += '<tr><td>' + (i + 1) + '</td><td>' + users[i] + '</td><td>' + age[i] + '</td><td>' + email[i] + '</td><td>';
// // // // }

// // // // table += '</tbody></table>';
// // // // text.innerHTML = table;




// // // // var table = document.createElement('table');
// // // // tagtable.boder = 1;
// // // // var thead = document.createElement('thead');
// // // // table.appendChild(thead);
// // // // var tbody = document.createElement('tbody');
// // // // table.appendChild(tbody);
// // // // document.body.appendChild(table);


// // // // var arrayStudents = [
// // // //     'Nguyen Van A',
// // // //     'Nguyen Van B',
// // // //     'Nguyen Van T'
// // // // ];
// // // // console.log("arrayStudents = ", arrayStudents);
// // // // console.log("arrayStudents = ", arrayStudents.length);
// // // // console.log("arrayStudents[0] = ", arrayStudents[0]);
// // // // console.log("arrayStudents[length - 1] = ", arrayStudents[arrayStudents.length - 1]);
// // // // console.log(typeof arrayStudents);

// // // // var arrDemo = [
// // // //     'Nguyen Van A',
// // // //     28,
// // // //     false,
// // // //     [123, 456, 789],
// // // // ];
// // // // console.log("arrDemo =", arrDemo);
// // // // console.log("arrDemo[3]", arrDemo[3][2]);

// // // // var gt = {
// // // //     name: 'P',
// // // //     age: '28',
// // // //     marriged: 'false',
// // // //     "name-of-dog": ['meo', 'mit'],
// // // //     tiengkeu: function (hanhdong) {
// // // //         console.log("ec ec");

// // // //         return {
// // // //             age: 'Pig'
// // // //         }
// // // //     }
// // // // };

// // // // gt.tiengkeu();
// // // // console.log(gt["name-of-dog"]);
// // // // console.log(gt.tiengkeu('dungkeu'));
// // // // console.log(gt.tiengkeu().age);
// // // // console.log(gt['name-of-doc']);

// // // // var arrayNameofDogs = gt['name-of-dog'];
// // // // console.log(arrayNameofDogs);
// // // // for (var i = 0; i < arrayNameofDogs.length; i++) {
// // // //     console.log(i);
// // // //     var heading = document.createElement('h1');
// // // //     var contentofHeading = document.createTextNode(arrayNameofDogs[i]);
// // // //     heading.appendChild(contentofHeading);
// // // //     document.body.appendChild(heading);
// // // //     /* dfsfs*/
// // // // }



// // // // function create(nameOfElement) {
// // // //     return document.createElement(nameOfElement);
// // // // }

// // // // console.log(data);

// // // // var arrDemo = [
// // // //     'John',
// // // //     'Smith',
// // // //     28,
// // // //     false,
// // // //     'John'
// // // // ];
// // // // console.log("arrDemo =", arrDemo)
// // // // console.log("arrDemo.length =", arrDemo.length)
// // // // console.log("arrDemo.push(123) = ", arrDemo.push(123));
// // // // console.log("arrDemo.unshift(456,879) =", arrDemo.unshift(456, 879));
// // // // console.log("arrDemo.pop =", arrDemo.pop());
// // // // console.log("arrDemo.shift =", arrDemo.shift());
// // // // console.log("arrDemo.indexOf('John') =", arrDemo.indexOf('John'));

// // // // if (arrDemo.indexOf(false) !== -1) {
// // // //     console.log("John da ket hon");
// // // // } else {
// // // //     console.log("John chua da ket hon")
// // // // }
// // // // console.log("arrDemo.lastIndexOf =", arrDemo.lastIndexOf('John'));
// // // // arrDemo[6] = 29;
// // // // console.log(arrDemo);