import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./Sidebar";

function Base(){
    return(
        <div>
            <Header />
            <SideBar />
            <Footer />
        </div>
    );
}
export default Base;