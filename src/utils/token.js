const TOKEN_KEY = 'token'
const REFRESH_TOKEN_KEY = 'refreshToken'

const getItem = key => (localStorage.getItem(key) || '')
const setItem = (key, value) => localStorage(key, value)

const getToken = () => {
  const token = getItem(TOKEN_KEY)

  return token ? 'Bearer '+ token : ''
}
const setToken = token => setItem(TOKEN_KEY, token)
const getRefreshToken = () => getItem(REFRESH_TOKEN_KEY)
const setRefreshToken = refreshToken => setItem(REFRESH_TOKEN_KEY, refreshToken)
const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export { getToken, setToken, getRefreshToken, setRefreshToken, clearToken }
