import React from "react";

export default function Form(props) {
  const { values, onInputChange, onSubmit } = props;

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="form-group submit">
          <h2>Add a Teammate</h2>
          <button>submit</button>
        </div>

        <div className="form-group inputs">
          <h4>Teammate Info</h4>

          <label>
            Username:&nbsp;
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={onInputChange}
              maxLength="40"
            />
          </label>

          <label>
            Email:&nbsp;
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={onInputChange}
              maxLength="40"
            />
          </label>

          <label>
            Age:&nbsp;
            <input
              type="text"
              name="age"
              value={values.age}
              onChange={onInputChange}
              maxLength="3"
            />
          </label>

          <label>
            Role:&nbsp;
            <select name="role" value={values.role} onChange={onInputChange}>
              <option value=""></option>
              <option value="Instructor">Instructor</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Front End Engineer">Front End Engineer</option>
              <option value="Back End Engineer">Back End Engineer</option>
            </select>
          </label>
        </div>
      </div>
    </form>
  );
}
