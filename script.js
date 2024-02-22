function rpsGame(yourChoice)
{
        var humanChoice = yourChoice.id;
        var botChoice = numberChoice(ranNumGen());
    
        var result = decideWinner(humanChoice,botChoice);
            
            // var yourScore = result[0];
            // var computerScore = result[1];
        var msg = finalMsg(result);
        
        rpsFrontEnd(humanChoice,botChoice,msg);
}

function numberChoice(number)
{
        return ['rock','paper','scissor'][number]
}
        
function ranNumGen()
{
        return Math.floor(Math.random()*3);
}                              
        
function decideWinner(yourChoice,computerChoice)
{
        var rpsData = {
                 'rock': {'scissor':1,'rock':0.5,'paper':0},
                 'paper': {'rock':1,'paper':0.5,'scissor':0},
                 'scissor': {'paper':1,'scissor':0.5,'rock':0}
            };
            var yourScore = rpsData[yourChoice][computerChoice];
            var computerScore = rpsData[computerChoice][yourChoice];
        
            return [yourScore,computerScore];
                   
 }
        
 function finalMsg([your,computer])
 {
         if(your===0)
         {
             return {'message':'You Lost!','color':'red'};
         }else if(your===0.5){
             return {'message':'You Tied!','color':'orange'};
         }else{
             return {'message':'You Win!','color':'green'};
         }
                    
 }
        
function rpsFrontEnd(humanImage,computerImage,msg)
 {
        var images = {
                 'rock':document.getElementById('rock').src,
                 'paper':document.getElementById('paper').src,
                 'scissor':document.getElementById('scissor').src
          };
         
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissor').remove();
        
      var humanDiv = document.createElement('div');
      var computerDiv = document.createElement('div');
      var messageDiv = document.createElement('div');
        
      humanDiv.innerHTML = "<img src='"+images[humanImage]+"' height=150 width=150 style='box-shadow:2px 3px 3px 3px blue;'>";
      computerDiv.innerHTML = "<img src='"+images[computerImage]+"' height=150 width=150 style='box-shadow:2px 3px 3px 3px red;'>";
      messageDiv.innerHTML = "<h1 style='color:"+msg['color']+";padding:40px;'>"+msg['message']+"</h1>"
        
      document.getElementById('div-2').appendChild(humanDiv);
      document.getElementById('div-2').appendChild(messageDiv);
      document.getElementById('div-2').appendChild(computerDiv);   
                   
 }                
