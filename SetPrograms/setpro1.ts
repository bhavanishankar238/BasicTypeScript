let H = new Set();

H. add(563564);
H.add(true);
H.add(false);
H.add('Kohli');
H.add('cricket');
H.add('Batting');
H.add(5735683);
H.add("RCB");

//console.log(H);

console.log(H.has("Kohli"));
console.log(H.has("kohli"));

H.delete("Batting");

H.clear();
console.log(H);