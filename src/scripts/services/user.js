import { baseUrl } from "../variables.js"

// Consumindo API GitHub Usando FETCH | Buscando os dados do usuario
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)

    return await response.json()
}

export { getUser }