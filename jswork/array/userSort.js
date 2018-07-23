users = [
    {
        name: "Zark",
        age: 18,
        company: "Apple"
    },
    {
        name: "Galahad",
        age: 38,
        company: "Microsoft"
    },
    {
        name: "Melin",
        age: 28,
        company: "Google"
    }
]

function userSort(obj, key) {
    if (key === "name") {
        console.log("name")
        obj.sort(function (obj) {

        })
    } else if (key === "age") {
        console.log("age")
    } else if (key === "company") {
        console.log("company")
    }
}

userSort(users, "age")

num = [15, 1, 4, 9, 33]
console.log(num.sort())
function compare(prop) {
    return function (a, b) {
        var val1 = a[prop]
        var val2 = b[prop]
        if(val1>val2){
            return 1
        }else if (val1<val2) {
            return -1
        }else if (val1===val2) {
            return 0
        }
    }
}
console.log(users.sort(compare('age')))