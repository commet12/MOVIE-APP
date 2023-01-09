function smth(myName, ...nombres) {
    let givi = 0;
    for(index in nombres) {
        givi = givi + nombres[index];
    }
    return `${myName} + : ${givi}`;
}
const lll = smth('xooo', 2, 44, 34);
console.log(lll)