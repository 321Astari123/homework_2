const sem1Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0, ]);
const sem1exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0, ]);
const prazdniki = Array(2).fill([0, 0, 0, 0, 0, 0, 0, ]);
const sem2Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0, ]);
const sem2exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);
const array = [sem1Week, sem1exam, prazdniki, sem2Week, sem2exam];
function calculateSemester(consol, sumdor, obed, doroga) {
    let doe = 0
    let tor = 0
    let kop = 0
    let days = 0;
    let weeks = 0;
    let doroga1 = doroga - sumdor
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            weeks = weeks + 1;
            console.log(` Номер недели ${weeks}`);
            for (let k = 0; k < array[i][j].length; k++) {
                days = days + 1;
                console.log(`Номер дня ${days}, сколько пар: ${array[i][j][k]}`)
                if (array[i][j][k] > 0) {
                    doe = doe + doroga1;
                }
                if ((array[i][j][k] <= 3) && (array[i][j][k] > 0)) {
                    kop = kop + obed
                }
                if (array[i][j][k] > 0) {
                    tor = doe + kop
                    console.log(`Накопилось: ${tor} руб.`)
                }
                if (tor >= consol) {
                    console.log(`Смогли накопить`)
                    return;
                }
            }
        }
    }
}
calculateSemester(23500, 120, 250, 150)