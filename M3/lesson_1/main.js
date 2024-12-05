// регулярные выражение

//flags
//g-global
//i-ignore case

// const username = prompt('What is your name?');

// const regExp =      /a/ig

// console.log(username.match(regExp));

// const numbers = '1234567890 _ amanbek _ AMAN4375 %^&^%$$'

// const regExp = /[0-9]/g
// const regExp = /[0-9a-z]/g
// const regExp = /[0-9a-zA-Z_]/g
// const regExp = /[^0-9]/g
// const regExp = /\D/g
// const regExp = /\d/g
// const regExp = /\w/g
// const regExp = /\W/g
// const regExp = /[\W\w]/g
// const regExp = /[\S\s]/g

// console.log(numbers.replace(regExp, '*'));
//console.log(numbers.match(regExp));


// const cals = (a,b) =>{
//     console.log(a + b);
// }
// cals(1, 2)

// recursion 

let num = 0

// num++
// console.log(num);

const countFromNumber = () => {
    num++
    console.log(num);
    if (num < 500) {
        countFromNumber()
        requestAnimationFrame(countFromNumber)
    }
}
countFromNumber()

//FPS -количество кадров в секунду


