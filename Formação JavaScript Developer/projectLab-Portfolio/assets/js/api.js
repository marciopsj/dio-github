async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/marciopsj/dio-github/main/Forma%C3%A7%C3%A3o%20JavaScript%20Developer/projectLab-Portfolio/data/profile.json'
    const data = await fetch(url)
    return await data.json()
}