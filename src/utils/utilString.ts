export function getNameFromEmail(email: string) {
  const arr = email.indexOf('@');
  return email.slice(0, arr);
}
