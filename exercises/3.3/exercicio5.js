function numDuplicado(array) {
    var object = {};
    var result = [];

    array.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var duplicado in object) {
       if(object[duplicado] >= 2) {
           result.push(duplicado);
       }
    }

    return result;

}

console.log(numDuplicado([2, 3, 2, 5, 8, 2, 3]));