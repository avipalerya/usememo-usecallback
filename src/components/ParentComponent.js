import React, { useCallback, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import ClasspureComponent from "./ClasspureComponent";
import DataCount from "./DataCount";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(10000);

  //useCallback()-it is a hook returns the memoized function
  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <ClasspureComponent />
      <DataCount count={age} text="age" />
      <ButtonComponent handleClick={incrementAge}>
        Increment Age
      </ButtonComponent>
      <DataCount count={salary} text="salary" />
      <ButtonComponent handleClick={incrementSalary}>
        Increment the salary
      </ButtonComponent>
    </div>
  );
};

export default ParentComponent;
