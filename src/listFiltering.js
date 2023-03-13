
function filter_list(l) {
    return l.filter(f => typeof f === 'number')
}

module.exports = filter_list;


// console.log(filter_list([1, 2, 'a', 'b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))