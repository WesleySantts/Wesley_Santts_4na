export const isValidName = (name: string): boolean => {
const nameRegex = /^(?! )[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)+$/;
return nameRegex.test(name);
};