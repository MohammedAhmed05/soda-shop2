var list = ['soda', 'coffee', 'ice cream', ' cold coffee', 'green tea', 'tea', 'salat']
$('.input').autocomplete(
    {
        source: list
    }
)
function abc() {
    var input = $('.input').val()
    if (input == 'soda') {
        $('.soda').show()
        $('.icecream').hide()
        // $('.salat').hide()
        $('.coldcoffee').hide()
        // $('.coffee').hide()
        // $('tea').hide()
        // $('.greentea').hide()

    }
    else if (input == "ice cream") {
        $('.soda').hide()
        $('.ice cream').show()
        $('.salat').hide()
        $('.cold coffee').hide()
        $('.coffee').hide()
        $('tea').hide()
        $('.green tea').hide()
    }
    else {
        alert("error, wrong search")
    }
}
function generate(price, name, bttno) {
    var q = document.getElementsByClassName('Quantity');
    var total
    if (bttno == 1) {
        total = price * q[0].value
        alert("Thank You for Shopping = " + total)
    }
    else if (bttno == 2) {
        total = price * q[1].value
        document.write(total)

    }
    else if (bttno == 3) {
        total = price * q[2].value
        document.write(total)
    }
    else if (bttno == 4) {
        total = price * q[3].value
        document.write(total)
    }
    else if (bttno == 5) {
        total = price * q[4].value
        document.write(total)
    } else if (bttno == 6) {
        total = price * q[5].value
        document.write(total)
    }
    else if (bttno == 7) {
        total = price * q[6].value
        document.write(total)
    }
    else if (bttno == 8) {
        total = price * q[7].value
        document.write(total)
    }
    else if (bttno == 9) {
        total = price * q[8].value
        document.write(total)

    }
    else if (bttno == 10) {
        total = price * q[9].value
        document.write(total)
    }
    else if (bttno == 11) {
        total = price * q[10].value
        document.write(total)
    }
    else if (bttno == 12) {
        total = price * q[11].value
        document.write(total)
    }
    else if (bttno == 13) {
        total = price * q[12].value
        document.write(total)
    }
    else if (bttno == 14) {
        total = price * q[15].value
        document.write(total)
    }
    else if (bttno == 15) {
        total = price * q[14].value
        document.write(total)
    }
    else if (bttno == 16) {
        total = price * q[15].value
        document.write(total)
    }

    else if (bttno == 17) {
        total = price * q[16].value
        document.write(total)
    }
    else if (bttno == 18) {
        total = price * q[17].value
        document.write(total)
    }
    else if (bttno == 19) {
        total = price * q[18].value
        document.write(total)
    }

    else if (bttno == 20) {
        total = price * q[19].value
        document.write(total)
    }
    else if (bttno == 21) {
        total = price * q[20].value
        document.write(total)
    }
    else if (bttno == 22) {
        total = price * q[21].value
        document.write(total)
    }
    else if (bttno == 23) {
        total = price * q[22].value
        document.write(total)
    }
    else if (bttno == 24) {
        total = price * q[23].value
        document.write(total)
    }
    else if (bttno == 25) {
        total = price * q[24].value
        document.write(total)
    }
    else if (bttno == 26) {
        total = price * q[25].value
        document.write(total)
    }
    else if (bttno == 27) {
        total = price * q[26].value
        document.write(total)
    }
    else if (bttno == 28) {
        total = price * q[27].value
        document.write(total)
    }
    else if (bttno == 29) {
        total = price * q[28].value
        document.write(total)
    }
    else if (bttno == 30) {
        total = price * q[29].value
        document.write(total)
    }
}