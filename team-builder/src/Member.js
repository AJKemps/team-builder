import React from "react";

export default function Member(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working on fetching your team members...</h3>;
  }

  return (
    <div className="memberContainer">
      <h2>{details.username}</h2>
      <p>{details.role}</p>
      <p>{details.email}</p>
    </div>
  );
}
