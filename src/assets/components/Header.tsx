const headerStyle = {
  color:'Green',
  border: '2px solid black'
}
const custStylt = {
  color:'red',
}
let greetings:string ;
const now = new Date();

const currentTime = now.getHours()
if(currentTime < 12){
    greetings = 'Good Morning';
    custStylt.color="purple"
}else if(currentTime>12 && currentTime<18){
     greetings = 'Good Afternoon'
    custStylt.color="pink"}
else{
    greetings = 'Good Night'
    custStylt.color="orange"
}

function Header(){
return(
    <header style={headerStyle}>
      <h1 style={custStylt}>Welcome to React</h1>
      <p>This is my Header component. {greetings} <span style={custStylt}>{currentTime}</span></p>
    </header>
)
}

export default Header;