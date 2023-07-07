let ulBox = document.getElementById('ulBox');
let f_1_btn = document.getElementById('f_1_btn').onclick = firstbtn;
// let ulBox = document.getElementById('ulBox');
// console.log(ulBox, salary, Expens);



// function obj(sarly, expen) {
//     let getamount = {
//         Number: 1,
//         salary: sarly,
//         Expens: expen
//             //  totalSum:

//     }

//     console.log(obj)
//     firstbtn(salary, Expens)
// }

// let amountOj = {

// }
// console.log(amountOj)


function firstbtn() {
    let salary = Number(document.getElementById('salary').value)
    let Expens = Number(document.getElementById('Expens').value)
    console.log(salary, Expens)
    let amountOj = (salry, Expns) => {
        totalamount.push({
            s_value: salry,
            f_value: Expns
        })
        console.log(totalamount)
    }
    amountOj(salary, Expens)

    li.innerText = totalamount[0].f_value;
    li_2.innerText = totalamount[0].s_value;
    console.log(totalamount[0].f_value)
    console.log(totalamount[0].s_value)
    let date_s = new Date().toLocaleString()
    let span = document.createElement('span')
    let span_2 = document.createElement('span')
    span_2.innerHTML = date_s
    console.log(span)
    console.log(span_2)
    span.innerHTML = date_s
    li.appendChild(span);
    li_2.appendChild(span_2);
    // suM()
}
let totalamount = [];
let li = document.createElement('li');
ulBox.appendChild(li);
let li_2 = document.createElement('li');
ulBox.appendChild(li_2);



function suM() {
    let money = document.getElementById('money');
    let calculate = totalamount[0].s_value - totalamount[0].f_value
    console.log(calculate)
    money.innerText = calculate
        // console.log(span)
        // a.appendChild(li)


}


// let a = firstbtn(salary.value, Expens.value)
// console.log(a)

// console.log(totalamount.join(' '))
// console.log(totalamount[0])
// li.innerText = totalamount.filter(a => {
//         console.log(a)
//     })
// totalamount.toLocaleString('');
// console.log(totalamount)
// li.innerHTML = totalamount.join()
// console.log(totalamount)