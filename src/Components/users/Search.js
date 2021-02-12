import React, {useState, useContext} from 'react';
import githubContext from '../../Context/github/githubcontext';
import alertContext from '../../Context/Alert/AlertContext'

// converting into function component
const Search = () => {
    const GithubContext = useContext(githubContext)
    const AlertContext = useContext(alertContext)

    const [text, setText] = useState(' ');
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            AlertContext.setAlert("Please enter something", 'Danger');
        }
        else {
            GithubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);
        return (
            <div className="container">
                <form onSubmit={onSubmit} className="form">
                    <h1>
                        GitFinder
                    </h1>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search for user'
                        value={text}
                        onChange={onChange}
                        className="searchbar"
                    />
                    <button
                        type="submit"
                        value="Search"
                        className="searchbutton btn-danger"
                    >
                    <i class="fa fa-search"></i>
                    </button>
                    {GithubContext.users.length > 0 && (
                        <button className="clearbutton btn-info" onClick={GithubContext.clearUsers}><i class="fa fa-search-minus"></i></button>
                    )}
                </form>
            </div>
        );
}


export default Search
