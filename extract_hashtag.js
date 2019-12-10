// Extract and return a hashtag from string

const hashtagStr = 'dfdfdfd #cat#, dog! #apple, #apple, world#, go#go, #f, #, #1, ###2';
var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/g;
var matches = [];
//var match;
  while ((match = regex.exec(hashtagStr)) !== null) {
    matches.push(match[1]);  
  };
  console.log(matches);

  // for (i = 0, len = hashtagStr.length; i < len; i++) {  
  //   match = regex.exec(hashtagStr);
  //   matches.push(match[1]); 
  //   console.log(matches); 
  // };

// var match = regexp.exec(hashtagStr);
// while (match != null) {
//   console.log(match[1])
//   match = regexp.exec(hashtagStr)
// };