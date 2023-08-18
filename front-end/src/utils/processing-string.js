export function ConvertUsernameShortly(name = "Tuan Nguyen") {
  if (!name)
    throw new Error(
      "ConvertUsernameShortly function must be have 'name' property"
    );
  let results = "";
  const divideName = name.split(" ");
  if (divideName.length < 3) {
    for (const items of divideName) {
      let getFirstCharacter = items.substr(0, 1);
      results = results.concat("", getFirstCharacter).toUpperCase();
    }
  } else {
    results = divideName[0]
      .substr(0, 1)
      .concat("", divideName[divideName.length - 1].substr(0, 1))
      .toUpperCase();
  }
  return results;
}
