export const shortAddress = (address) => {
  if (address) {
    const adr = [...address.split(",")];
    adr.splice(0, 1);
    return adr.join(" | ");
  }
};
