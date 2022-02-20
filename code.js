//Function will begin the game
function play() {
    //Var die1 and die 2 will be assigned two two dice, ceil will make it so that the random 
    //characters will not be from 0-5; instead it will be 1-6
    //multiplying it by 6 will make 6 the max
    var die1 =Math.ceil(Math.random()*6);
    
    
    var die2 =Math.ceil(Math.random()*6);
    
    
    //var sum will add the sum of both rolls
    //the brackets will add spaces in between the text into the html 
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    //If the sum outputs to 7 or 11 the output will write out you lose for the game
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    //If the number is rolled twice, the sum will output you win with a spacing bracket at the end 
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
    }

    function btrCountDownV1(){
        console.log("testCodeV1() started");
        //This will creat a loop time left variable
        var currTime = 50;
        //This will create a repeating loop for the timers
        for(var i = 0; i < 11; i++){
            setTimeout(function(){
                console.log(currTime);
                //This will display the current countdown time wit changes caused by the admiral's order
                if(currTime == 0){
                    //This will make the word "blastoff" appear if the time is 0
                    document.getElementById("countDownRes").innerHTML = "Blastoff";
                }else if(currTime < 25){
                    document.getElementById("countDownRes").innerHTML = 
                        "Warning Less than ½ way to launch, time left = " + currTime;
                }else {
                    document.getElementById("countDownRes").innHTML = currTime;
                }
                //This is the timer's incriments countdown by 5
                currTime = currTime - 5;
            //This will wait 5 seconds per step 
            }, i * 5000)
            
        }
    }