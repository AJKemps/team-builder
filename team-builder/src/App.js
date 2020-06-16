import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Member from "./Member";
import Form from "./Form";

const initialTeamList = [
  {
    id: uuid(),
    username: "Alex Kemper",
    email: "alex@alex.com",
    age: 30,
    role: "Student",
  },
];

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

function App() {
  const [teamList, setTeamList] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (
      !formValues.username ||
      !formValues.email ||
      !formValues.role ||
      !formValues.age
    ) {
      return "Must fill out all form fields";
    }

    const newMember = { ...formValues, id: uuid() };

    setTeamList([...teamList, newMember]);
  };

  return (
    <div>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />

      {teamList.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
