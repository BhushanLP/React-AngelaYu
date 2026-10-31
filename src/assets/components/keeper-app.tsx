import AppFooter from "./keeper-app/app-footer";
import AppHeader from "./keeper-app/app-header";
import AppNotes from "./keeper-app/app-notes";

function KeeperApp(){
    return (
    <div>
    <AppHeader />
        <AppNotes />
        <AppFooter />
        </div>
    )
}

export default KeeperApp;