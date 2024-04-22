import React from 'react';
import {Link} from "react-router-dom";

export default class LogoOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="logo-box-one">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                        <img src={publicUrl+"assets/images/resources/logo-1.png"} alt="Awesome Logo" />
                    </Link>
                </div>
            </>
        )
    }
}