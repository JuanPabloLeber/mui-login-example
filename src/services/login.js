import api from './serviceConfig'

async function login(userInput) {
  const response = await api.post('login', userInput)
  return response
}

export default login
