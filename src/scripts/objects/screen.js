const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="Foto do perfil do usuario" />
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                    <h3>🔵 Seguidores ${user.followers ?? 'Não está seguindo ninguém 😢'}</h3>
                    <h3>🔵 Seguindo ${user.following ?? 'Não tem seguidores 😢'}</h3>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
            `<li>
                <a href="${repo.html_url}" target="_blank">${repo.name}
                    <div class="info-repo">
                        <span>🍴${repo.forks}</span>
                        <span>⭐${repo.stargazers_count}</span>
                        <span>👀${repo.watchers_count}</span>
                        <span>👨‍💻${repo.language}</span>
                    </div>
                </a>
            </li>`
        )

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories section">
                    <h2>Repositórios</h2>
                        <ul>${repositoriesItens}</ul>
                </div>`
        }

        let eventItens = ''
        user.events.forEach(event => {
            
            if (event.type === "PushEvent" || event.type === "CreateEvent") {

                if (event.type === "PushEvent") {
                    eventItens +=

                    `<li>
                        <p class="name-repo">${event.repo.name}: <span><br>${event.payload.commits[0].message}</span></p><br>
                    </li>`
                }

                if (event.type === "CreateEvent") {
                    eventItens +=

                    `<li>
                        <p class="name-repo">${event.repo.name}: <span><br> Sem mensagem de commit </span></p><br>
                    </li>`
                }
            }
        });

        this.userProfile.innerHTML +=

            `<div class="events section">
                <h2>Eventos</h2>
                <ul class="events">
                    ${eventItens}
                </ul>
            </div>`

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }