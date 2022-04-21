// const nbYear = (p0, perc, aug, pop) => {
//     let years = 0;
//     for (let i = 0; p0 < pop; i++) {
//         p0 = p0 * (1 + perc/100) + aug;
//         years++
//     }
//     return years;
// }

// console.log(nbYear(1500, 5, 100, 5000))

function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug;
    }
    return y;
  }