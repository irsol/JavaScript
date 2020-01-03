var testStr = '#hashtag is here!'
var testStr = testStr.replace(/#(\w+)/g, '<a href="http://twitter.com/#!/search/$1">$1</a>');

console.log(testStr);