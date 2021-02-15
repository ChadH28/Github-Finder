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
                <div className="container">
                <div className="grid-2 user-content">
                    <Link to='/' className='backbutton btn-danger' style={bb}><i class="fa fa-home"></i></Link>
                    <div className="card user-info">
                        <img src={avatar_url} alt='' style={imgStyle}></img>
                        <h1 className="card-title">{name}</h1>
                        <div className="card-body">
                        <p className="card-text">Location - {location}</p>
                        <p className="card-text">
                            Hireable - {' '}
                            {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
                        </p>
                        </div>
                        <p><a href={html_url}><button className="profile-btn">Visit github Profile</button></a></p>
                    </div>

                    <div className="card bio-info">
                            {bio && (<Fragment>
                                        <h3>Bio</h3>
                                            <p>{bio}</p>
                                    </Fragment>
                            )}
                        <ul>
                            <li className="card-text">
                                {login && (<Fragment>Username - {login}</Fragment>)}
                            </li>
                            <li className="card-text">
                                {company && (<Fragment>Company - {company}</Fragment>)}
                            </li>
                            <li className="card-text">
                                {blog && (<Fragment>Website - {blog}</Fragment>)}
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="badgelist">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-danger">Public Repos: {public_repos}</div>
                        <div className="badge badge-warning">Public Gists: {public_gists}</div>
                    </div>
                </div>

                    <div className="user-repo">
                        <h3>User Repos</h3>
                        <Repos repos={repos}/>
                    </div>  
                </div>

            </Fragment>
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






