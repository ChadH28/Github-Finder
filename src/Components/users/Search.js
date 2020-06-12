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
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input
                        type='text'
                        name='text'
                        placeholder='search for user'
                        value={text}
                        onChange={onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-info btn-block"
                    />
                </form>
                {GithubContext.users.length > 0 && (
                <button className="btn btn-info btn-block" onClick={GithubContext.clearUsers}>Clear?</button>
                )}
            </div>
        );
}


export default Search
