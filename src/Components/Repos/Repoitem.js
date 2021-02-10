import React from 'react';
import PropTypes from 'prop-types';

const Repoitem = ({repo}) => {
    return (
        <div className="card">
            <h2>
                <a href={repo.html_url}>{repo.name}</a>
            </h2>
            
        </div>
    )
}
Repoitem.propTypes = { 
    repo: PropTypes.object.isRequired,
}
export default Repoitem
