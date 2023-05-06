function updateProfileDara(profileData) {
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


(async () => {
    const profileData = await fetchProfileData()
    updateProfileDara(profileData)
})()