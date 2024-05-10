function changeImage(value) {
    var x = value
    console.log(x);

    if (x == '1' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' || x == '10') {
        var z = "http://127.0.0.1:5500/images/" + x + ".jpg"
        console.log(z)
    } else if (x == '2' || x == '4'){
        var z = "http://127.0.0.1:5500/images/" + x + ".png"
        console.log(z)
    } else {
        var z = "http://127.0.0.1:5500/images/" + x + ".jpeg"
        console.log(z)
    }
    let y = document.getElementById("main-img").src
    document.getElementById("main-img").src = z
    console.log(y)

}
