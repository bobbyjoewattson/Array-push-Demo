var landon  = [
];
var momohara = [
];
var first= prompt("What is your first name?");
landon.unshift(first);
var second = prompt("What is your last name?");
momohara.unshift(second);
window.alert(landon[0] + " " + momohara[0] + landon.length + momohara.length);