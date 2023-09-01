var yourName = prompt ('Enter your name');

var yourCrushName = prompt ('Enter your crush name');

var loveScore = Math.random();

loveScore = loveScore * 100;

loveScore = Math.floor(loveScore) + 1 ;

if (loveScore >= 75) {
    alert ("Congratulations, You have " + loveScore + "%" + " chances of bagging your crush.");

}else if (loveScore >50 && loveScore <75 ) {
    alert ("Your lovescore is " + loveScore + "%." + " You have little chance of being with your crush.");

} else {
    alert ("Find another crush eje.")
};
 
    




