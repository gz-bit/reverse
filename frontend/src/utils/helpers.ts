export const rootDomain = "http://localhost"

export const validateEmail = (email: string) => {
  const regex = new RegExp(/^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/gm)
  if (regex.test(email)) {
    return true
  } 
  return false
}