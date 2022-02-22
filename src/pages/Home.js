import React, { Component } from "react";
import Base from "../components/Base";
import DashBoard from "../components/DashBoard";

class Home extends Component {
    render(){
        return(
            <div>
                <Base />
                <DashBoard />
            </div>
            
        );
    }
}
export default Home;