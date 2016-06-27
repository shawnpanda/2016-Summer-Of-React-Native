export const SUBMIT_NAME = 'SUBMIT_NAME'

export function submitName(firstName, lastName) {
  return {
    type: SUBMIT_NAME,
    FirstName: firstName,
    LastName: lastName
  }
}