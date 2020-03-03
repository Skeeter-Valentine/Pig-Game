/*var firstName='john'
console.log(firstName)

var johnMass, johnHeight, markMass, markHeight, 
    johnBMI, markBMI, markFatter, statement

johnMass=70
johnHeight=2.1
markMass=65
markHeight=1.8
johnBMI=johnMass/(johnHeight*johnHeight)
console.log(johnBMI)
markBMI=markMass/(markHeight*markHeight)
console.log(markBMI)
markFatter=markBMI>johnBMI
console.log(markFatter)
statement="Is Mark's BMI higher than John's?" + " " + markFatter
console.log(statement)

var age=14
age>=18 ? console.log(firstName+' drinks beer'): 
    console.log(' drinks juice')

var job='teacher'
switch (job) {
    case 'teacher': console.log (firstName + ' teaches kids')
    break;
    case 'driver': console.log(firstName+' drives')
    break;
    default : console.log (firstName+' does something else')
}

var first=124
var second=48
var third=268

var calculator = function(bill){ if (bill<50){return bill*.2}
else if(bill>200){return bill*.1} 
else{return bill*.15}

}

console.log(calculator(124))

var tips=[calculator(first), calculator(second), 
    calculator(third)]

    console.log(tips)

var john = {
    name: 'john',
    mass: 92,
    height: 1.92,
    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi
    }
}

var matt = {
    name: 'matt',
    mass: 85,
    height: 1.99,
    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi
    }
}

if (john.calcBMI()>matt.calcBMI()){console.log(john.name + 
    ' has a higher BMI of ' + john.bmi)
} else if (matt.bmi > john.bmi){console.log(matt.name+
    ' has a higher BMI of '+ matt.bmi)
} else { console.log('They have the same BMI')}


var ted=['ted','forest',10,'harry']
for (var i=0; i<ted.length; i++){
    console.log(ted[i])
}

var i=0;
while(i<ted.length-1){
    console.log(ted[i]);
    i++;
}

var ted=['ted','forest',10,'harry']
for (var i=0; i<ted.length; i++){
    if(typeof ted[i] !== 'string') continue
    console.log(ted[i])
}

var ted=['ted','forest',10,'harry']
for (var i=0; i<ted.length; i++){
    if(typeof ted[i] !== 'string') break
    console.log(ted[i])
}

var ted=['ted','forest',10,'harry']
for (var i=ted.length-1; i>-1; i--){
    console.log(ted[i])
}

var gary = {
    name:'gary',
    bills:[124, 48, 268, 180, 42],
    calcTips: function(){
        
        this.tips=[]
        this.finalvalues=[];

    for (var i=0; i<this.bills.length; i++){
        var percentage;
        var bill = this.bills[i]
        if (bill<50){percentage=.2}
        else if(bill>200){percentage=.1} 
        else{percentage=.15}

        this.tips[i]=bill*percentage
        this.finalvalues[i]=bill+bill*percentage
    }
    }
}
gary.calcTips()
console.log(gary)

function calcAv(tips){
    var sum=0
    for (var i=0; i<tips.length; i++){
        sum=sum+tips[i]
    }
    return sum/tips.length
}

gary.average=calcAv(gary.tips)*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll;

function init(){

scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true
lastRoll=[0,0]

document.querySelector('.dice').style.display='none'

document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
document.getElementById('name-0').textContent='Player 1'
document.getElementById('name-1').textContent='Player 2'
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')
document.querySelector('.player-1-panel').classList.remove('active')
}

init()

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
    var diceDOM= document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if (dice===6 && lastRoll[activePlayer]===6){scores[activePlayer]=0
        document.getElementById('score-'+activePlayer).textContent= '0'
        nextPlayer()

    }else if (dice !==1){
        roundScore+=dice
        document.querySelector('#current-'+activePlayer).textContent=roundScore
        lastRoll[activePlayer]=dice
    } else { nextPlayer()
    }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
    scores[activePlayer]+=roundScore
    document.querySelector('#score-'+activePlayer).textContent= scores[activePlayer]
    var input= document.querySelector('.final-score').value
    var winningScore
    //if input is undefined, 0, null then it will be coerced false
    if(input){
        winningScore = input;
    } else{
        winningScore = 100
    }
    if (scores[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent='Winner!'
        document.querySelector('.dice').style.display='none'
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner')
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active')
        gamePlaying=false
    }
    else {nextPlayer()
    }
    }
})

function nextPlayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0
        roundScore=0
        document.getElementById('current-0').textContent=roundScore
        document.getElementById('current-1').textContent=roundScore
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
       
        document.querySelector('.dice').style.display='none'
        lastRoll=[0,0]
}

document.querySelector('.btn-new').addEventListener('click', init)

function getDivisorsCnt(n){
    var arr=[]
    for (var i=1; i<=n; i++){if (n/i===Math.floor(n/i)){arr.push(i)}};
    return arr.length
}