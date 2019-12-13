// Parse Hashtag
function parseHashtag(inputText) {
  var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/g;
  var matches = [];
  var match;
  while ((match = regex.exec(inputText)) !== null) {
    matches.push(match[1]);  
  }
  return matches;
}
module.exports = parseHashtag;
