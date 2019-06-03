function loadDoc() {
    var xhtml = new XMLHttpRequest(); // lệnh bắt buộc 1
    xhtml.onreadystatechange = function () {
        // lệnh bắt buộc 2
        if (this.readyState == 4 && this.status == 200) {
            // lệnh bắt buộc 3
            var data = JSON.parse(this.responseText);
            table =
                "<table><thead><tr><th>STT</th><th>ID</th><th>Name</th><th>Email</th></tr></thead><tbody>";
            // tạo table
            for (var i = 0; i < data.users.length; i++) {
                table +=
                    "<tr><td>" +
                    (i + 1) +
                    "</td><td>" +
                    data.users[i].id +
                    "</td><td>" +
                    data.users[i].name +
                    "</td><td>" +
                    data.users[i].email +
                    "</td></tr>";
            }
            table += "</tbody>";
            document.getElementById("text").innerHTML = table;
            // nguồn https://www.youtube.com/watch?v=nC3_QqYOfxs (Phát :D)
        }
    };
    xhtml.open(
        "GET",
        "https://namcoi.com/projects/users-crud-laravel/public/api/users",
        true
    ); // lệnh bắt buộc 4
    xhtml.send(); // lệnh bắt buộc 5
}




// // var data = {
// //     "users": [{
// //             "id": 10,
// //             "name": "Ethyl Medhurst",
// //             "email": "noah.hand@example.org",
// //             "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
// //             "created_at": "2019-03-26 04:55:04",
// //             "updated_at": "2019-03-26 04:55:04"
// //         },
// //         {
// //             "id": 9,
// //             "name": "Eula Lebsack PhD",
// //             "email": "schroeder.sylvan@example.org",
// //             "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
// //             "created_at": "2019-03-26 04:55:03",
// //             "updated_at": "2019-03-26 04:55:03"
// //         },
// //         {
// //             "id": 8,
// //             "name": "Mrs. Kathlyn Parisian DDS",
// //             "email": "ggrimes@example.net",
// //             "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
// //             "created_at": "2019-03-26 04:55:03",
// //             "updated_at": "2019-03-26 04:55:03"
// //         }
// //     ]
// // };


// // var table =
// //     '<table align="center"><thead><tr><th>Id</th><th>Name</th><th>Email</th><th>Created_at</th><th>Updated_at</th></tr></thead><tbody>';

// // for (var i = 0; i < data.users.length; i++) {
// //     table += '<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name + '</td><td>' + data.users[i].email + '</td><td>' + data.users[i].created_at + '</td><td>' + data.users[i].updated_at + '</td></tr>';
// // }
// // table += '</tbody></table>';
// // text.innerHTML = table;



// // $(document).ready(function () {
// //     $("#an").click(function () {
// //         $("#text").hide();
// //     });
// //     $("#hien").click(function () {
// //         $("#text").show();
// //     });
// // });

// $(document).ready(function () {
//     $("#a1").show();
//     $("#a2").hide();
//     $("#a3").hide();
//     $("#a1").click(function () {
//         $("#a1").hide();
//         $("#a2").show();
//     });
//     $("#a2").click(function () {
//         $("#a2").hide();
//         $("#a3").show();
//     });
//     $("#a3").click(function () {
//         $("#a3").hide();
//         $("#a1").show();
//     })
// });