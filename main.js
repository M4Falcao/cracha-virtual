const socialMedia = {
  github: 'M4Falcao',
  linkedin: 'in/mateus-falc%C3%A3o27',
  instagram: 'mateus.fal',
  twitter: 'TeusFalcon',
  youtube: 'watch?v=5qap5aO4i9A'
}

function changeSocialMedia() {
  // document.getElementById('gitName').textContent = socialMedia.github
  for (let li of socialLinks.children) {
    const media = li.getAttribute('class')

    li.children[0].href = `https://${media}.com/${socialMedia[media]}`
  }
}
changeSocialMedia()

function changeDescription() {
  let element = document.getElementById('description')
  element.textContent = 'O mangue agradece'
  alert(element.textContent)
}

function getGitHubAtributes() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      description.textContent = data.bio
      gitName.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
    })
}

getGitHubAtributes()
