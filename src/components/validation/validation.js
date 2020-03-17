export const arrayValidation = theArray => {
  return Array.isArray(theArray) && theArray.length > 0;
};

export const objectValidation = theObject => {
  if (theObject === null || theObject === undefined) {
    return false;
  } else {
    return (
      Object.entries(theObject).length > 0 && theObject.constructor === Object
    );
  }
};
