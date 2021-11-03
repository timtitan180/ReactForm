import React from "react";

function Form() {
  const [contact, setContact] = React.useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const inputContact = event.target.name;
    const value = event.target.value;

    setContact((prevValue) => {
      if (inputContact === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (inputContact === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      } else if (inputContact === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: "Email:" + "" + value
        };
      }
    });
  }

  return (
    <form className="form">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <input onChange={handleChange} name="fName" placeholder="First Name" />
      <input onChange={handleChange} name="lName" placeholder="Last Name" />
      <input onChange={handleChange} name="email" placeholder="Email" />
      <button>Submit</button>
    </form>
  );
}

export default Form;
