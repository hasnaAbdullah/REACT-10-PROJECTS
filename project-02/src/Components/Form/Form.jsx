import React from "react";
import Input from "../FormInput/Input";
import Button from "../Button/Button";
function Form() {
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.dir(e.target);
    e.target.reset();
  };
  return (
    <form action="" onSubmit={sumbitHandler}>
      <Input
        labelText="Name"
        inputText="Enter your name"
        inputType="text"
        isInput={true}
      />
      <Input
        labelText="E-Mail"
        inputText="Enter your mail"
        inputType="email"
        isInput={true}
      />
      <Input
        labelText="Password"
        inputText="password(1234)"
        inputType="password"
        isInput={true}
      />
      <Input labelText="Message" isInput={false} />

      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button text="SUBMIT" />
      </div>
    </form>
  );
}

export default Form;
