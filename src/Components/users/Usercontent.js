import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 
 
const Usercontent = ({user: {login, avatar_url, html_url}}) => {
        return (
            <div className="usercard text-center" >
                <img src={avatar_url} alt='' style={imgStyle}></img>
                <div className="card-body">
                    <h4 className="card-title">{login}</h4>
                    <Link to={`/user/${login}`} className="btn btn-primary">See Profile</Link>
                </div>               
            </div>           
        )
}



const imgStyle= {
    width:"70%",
    height:"50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: "50%"
}


Usercontent.propTypes = {
    user: PropTypes.object.isRequired,
}

export default Usercontent

