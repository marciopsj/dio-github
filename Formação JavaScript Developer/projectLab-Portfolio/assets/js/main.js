function updateProfileData(profileData) {
    const profilePhoto = document.querySelector('.profile__photo')

    profilePhoto.src = profileData.photo
    profilePhoto.alt = `Foto do perfil de ${profileData.name}`

    const profileName = document.querySelector('.profile__name')
    profileName.innerText = profileData.name

    const profileJob = document.querySelector('.profile__job')
    profileJob.innerText = profileData.job

    const profileLocation = document.querySelector('.profile__location')
    profileLocation.innerText = profileData.location

    const profilePhone = document.querySelector('.profile__phone')
    profilePhone.href = `tel:${profileData.phone}`
    profilePhone.innerText = profileData.phone

    const profileEmail = document.querySelector('.profile__email')
    profileEmail.href = `mailto:${profileData.email}`
    profileEmail.innerText = profileData.email
}

function updateSoftSkill(profileData) {
    const softSkill = document.querySelector('.soft_skill__list')
    softSkill.innerHTML = profileData.skills.softSkills.map(skill => `
    <li class="soft_skill__item">${skill}</li>
    `).join('')
}

function updateHardSkill(profileData) {
    const hardSkill = document.querySelector('.hard_skill__list')
    hardSkill.innerHTML = profileData.skills.hardSkills.map(skill => `
    <li class="hard_skill__item">
    <img src="${skill.logo}" alt="${skill.name}" />
    </li>
    `).join('')
}

function updateLanguage(profileData) {
    const languages = document.querySelector('.language__list')
    languages.innerHTML = profileData.languages.map(language => `
    <li class="language__item">${language}</li>
    `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkill(profileData)
    updateHardSkill(profileData)
    updateLanguage(profileData)

})()