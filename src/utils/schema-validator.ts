export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  // avabe propertyPath gulo ashte pare, setar e example.
  // let propertyPath = "admin.name.firstName"
  // let propertyPath = "admin.name.lastName"

  const properties = propertyPath.split(".");
  // split er por ekta array er moton avabe return korbe.
  // ["admin","name","firstName"]
  // ["admin","name","lastName"]

  let value = obj;
  // let obj = errors -> obj ta ashtese ekta errors.

  for (let prop of properties) {
    if (value[prop]) {
      value = value[prop];
    } else {
      return undefined;
    }
  }

  return value.message;
};
