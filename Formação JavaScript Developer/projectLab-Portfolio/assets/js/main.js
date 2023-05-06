function updateProfileDara(profileData) {
    const profilePhoto = document.querySelector('.profile__photo')
    console.log(profilePhoto);
    profilePhoto.src = profileData.photo
    profilePhoto.alt = `Foto do perfil de ${profileData.name}`  


}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileDara(profileData)
})()