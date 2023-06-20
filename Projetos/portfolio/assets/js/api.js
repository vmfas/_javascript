
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/vmfas/javascript/main/Projetos/portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
