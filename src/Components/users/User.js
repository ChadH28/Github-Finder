import React, { Fragment,useEffect, useContext} from 'react';
import Repos from '../Repos/Repos'
import Spinner from '../Layout/Spinner';
import {Link} from 'react-router-dom';
import githubContext from '../../Context/github/githubcontext'


const User = ({match}) => {
    const GithubContext = useContext(githubContext);

    const {getUser, loading, user, repos, getUserRepos} = GithubContext;
    useEffect(() =>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    },[]);

    
        const {
            name,
            avatar_url,
            company,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;


        if (loading) return <Spinner/>;
        return (
            <Fragment>
                <div className="userwrapper">
                    <Link to='/' className='backbutton btn-danger' style={bb}><i class="fa fa-home"></i></Link>
                    <div className="card" style={cardStyle}>
                        <img src={avatar_url} alt='' style={imgStyle}></img>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                        <p>
                            Hireable: {' '}
                            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
                        </p>
                        <p><a href={html_url}><button style={button}>Visit github Profile</button></a></p>
                    </div>

                        <div>
                            {bio && (<Fragment>
                                        <h3>Bio</h3>
                                        <p>{bio}</p>
                                    </Fragment>
                            )}
                        <ul>
                            <li>
                                {login && (<Fragment>Username: {login}</Fragment>)}
                            </li>
                            <li>
                                {company && (<Fragment>Company: {company}</Fragment>)}
                            </li>
                            <li>
                                {blog && (<Fragment>Website: {blog}</Fragment>)}
                            </li>
                        </ul>
                    </div>

                    <div className="card grid-2 text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-danger">Public Repos: {public_repos}</div>
                        <div className="badge badge-warning">Public Gists: {public_gists}</div>
                    </div>

                    <div>
                        <h3>User Repos:</h3>
                        <Repos repos={repos}/>
                    </div>  
                </div>
            </Fragment>
        )
}

const cardStyle= {
    width: '400px',
    backgroundColor: "white",
    margin: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    textAlign: "center"
}

const imgStyle= {
    width:"70%",
    height:"50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: "50%"
}
const button= {
    border: "none",
    outline: "0",
    display: "inline-block",
    padding: "8px",
    color: "white",
    backgroundColor: "#000",
    textAlign: "center",
    width: "100%",
    fontSize: "18px"
  }

const bb ={
    position: "fixed",
    marginTop: "0",
    right: "15px",
    padding: "10px 15px",
    border: "none",
    borderRadius: '50%',
    textDecoration: "none",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
}

export default User






