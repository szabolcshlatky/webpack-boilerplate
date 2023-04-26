/* SHORTER: alert(prompt(`Compose your tweet:`).slice(0,280)); */

var tweet = prompt(`Compose your tweet:`);
var tweetCount = tweet.length;
var tweetUnder280 = tweet.slice(0,280);

alert(`Your tweet is: ` + tweetUnder280 + `. You have written ` + tweetCount + ` characters. You have ` + (280 - tweetCount) + ` characters remaining.`)