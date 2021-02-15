import React, { useContext } from "react";
import Usercontent from "./Usercontent";
import Spinner from "../Layout/Spinner";
import githubContext from "../../Context/github/githubcontext";

const Users = () => {
  const GithubContext = useContext(githubContext);
  const { loading, users } = GithubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <div style={userStyle}>
          {users.map((user) => (
            <Usercontent key={user.id} user={user}></Usercontent>
          ))}
        </div>
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
