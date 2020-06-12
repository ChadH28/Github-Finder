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
                <Link to='/' className='btn btn-light'>Back to search</Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
                <div className="card grid-2">
                    <div className="card all-center" style={cardStyle}>
                    <img src={avatar_url} alt='' style={imgStyle}></img>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    </div>

                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className="btn btn-dark my-1">Visit github Profile</a>
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        Username: {login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        Company: {company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        Website: {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-danger">Public Repos: {public_repos}</div>
                    <div className="badge badge-warning">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
}

const cardStyle= {
    width: '400px',
    backgroundColor: "yellow",
    margin: "2%"
}

const imgStyle= {
    width:"70%",
    height:"50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: "50%"
}


export default User
