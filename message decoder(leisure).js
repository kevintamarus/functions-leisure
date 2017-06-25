//Code referencing CharCode
function decode(message) {
  return message.map(function(x) {
    return String.fromCharCode((x<27 ? x+96 : x+5));
  }).join('');
}
//lazy convert
function convert(string) {
  var array = string.split('');
  var resultArray = [];
  array.forEach(function(x) {
    var y = x.charCodeAt()
    resultArray.push(y > 96 ? y-96 : y-5);
  })
  return resultArray;
}

//Code referencing an array
function decode(message) {
    var letters = [' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!'];
    return message.map(function(x) {
        return letters[x];
    }).join('');
}
//lazy convert
function convert(string) {
    var array = string.split('');
    var resultArray = [];
    var letters = [' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!'];
    array.forEach(function(letter) {
        letters.forEach(function(y,z) {
            if (letter === letters[z]) {
                resultArray.push(z)
            }
        })
    })
    return resultArray;
}