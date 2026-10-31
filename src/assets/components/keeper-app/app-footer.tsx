import "./keeper-app.css";

const year = new Date()

function AppFooter(){
    return (      <footer>
        <p>Copyright © {year.getFullYear()}</p>
    </footer>)
}
 export default AppFooter;