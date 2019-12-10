// Extract and return a hashtag from string

const hashtagstr = '#cat, dog! #apple, # apple, world#, go#go';
var regexp = /#(\w+)/g;
var match = regexp.exec(hashtagstr);
while (match != null) {
  console.log(match[1])
  match = regexp.exec(hashtagstr)
}