// getting elements on which action has to be performed
const strikeButton=document.getElementById("strike")
const teamOneScoreElement=document.getElementById("score-team1")
const teamOneWicketsElement=document.getElementById("wickets-team1")
const teamTwoScoreElement=document.getElementById("score-team2")
const teamTwoWicketsElement=document.getElementById("wickets-team2")
const resetButton=document.getElementById("reset")

var teamBalls=1;
var teamOneTotalScoreValue=0;
var teamOneTotalWicketValue=0;
var teamTwoTotalScoreValue=0;
var teamTwoTotalWicketValue=0;




function gameOver() {
  if(teamOneTotalScoreValue>teamTwoTotalScoreValue)
  {
    alert("Ind Wins");
  }
  if(teamOneTotalScoreValue<teamTwoTotalScoreValue)
  {
    alert("Pak Wins");
  }
  if(teamOneTotalScoreValue==teamTwoTotalScoreValue)
  {
    alert("Draw");
  }
}

function getRandomOutcome()
{
  possibleOutcomes = [0,1,2,3,4,5,6,'W'];
 return possibleOutcomes[Math.floor((Math.random()*possibleOutcomes.length))];
}

function updateteamOneScoreboard()
{
  teamOneScoreElement.textContent=teamOneTotalScoreValue;
  teamOneWicketsElement.textContent=teamOneTotalWicketValue;
}

function updateteamTwoScoreboard()
{
  teamTwoScoreElement.textContent=teamTwoTotalScoreValue;
  teamTwoWicketsElement.textContent=teamTwoTotalWicketValue;
}
var turn=1;
// Resetting the scores
resetButton.onclick=()=>{
  window.location.reload();
}

strikeButton.onclick=()=>{
  // team one scenario
  let randomOutcome = getRandomOutcome()
  console.log(randomOutcome)

  if(turn==2)
  {
    document.querySelector(`#team2-superover div:nth-child(${teamBalls})`).textContent=randomOutcome;
    teamBalls++;
  // calulating the score and wickets
    if(randomOutcome=='W')
    {
      teamTwoTotalWicketValue = teamTwoTotalWicketValue+1;
    }
    else{
      teamTwoTotalScoreValue = teamTwoTotalScoreValue+randomOutcome;
    }
    // updating the scoreboard
    updateteamTwoScoreboard();
    // game over conditions 
    if(teamBalls>6 || teamOneTotalWicketValue>2 || teamOneTotalScoreValue<teamTwoTotalScoreValue)
    {
      console.log("Game Over");
      gameOver();
     turn=3;
    }
  }

  if(turn==1)
  {
    document.querySelector(`#team1-superover div:nth-child(${teamBalls})`).textContent=randomOutcome;
    teamBalls++;
  // calulating the score and wickets
    if(randomOutcome=='W')
    {
      teamOneTotalWicketValue = teamOneTotalWicketValue+1;
    }
    else{
      teamOneTotalScoreValue = teamOneTotalScoreValue+randomOutcome;
    }
    // updating the scoreboard
    updateteamOneScoreboard();
    if(teamBalls>6 || teamOneTotalWicketValue>2)
    {
      console.log("team 2 should start");
     turn=2;
     teamBalls=1;
    }
  }




  // adding the current balls score to the UI

  
  


  // balls should be increased
  // a random score to be generated
  // score board should be updated

}