type ternaryConditionsTypes = (
    condition: boolean,
    truthyClass: string | number | React.ReactElement,
    falsyClass: string | number | React.ReactElement,
  ) => string | number | React.ReactElement;
  
  export const ternaryConditions: ternaryConditionsTypes = (condition, truthyClass, falsyClass) => {
    return condition ? truthyClass : falsyClass;
  };
  