import { navigateTo } from "../router.js";

export default function Header () {
    const header = document.getElementById("header");
    
    header.innerHTML = `
    <div class="header-div">
        <h1>아무 말 대잔치</h1>
        <div id="profile"></div>
    </div>
  
    `;
    const Profile = document.getElementById("profile")
    const ProfileImage = document.createElement("img")
    ProfileImage.src = './src/assets/character.jpg'
    ProfileImage.classList.add("profile-image")
    Profile.appendChild(ProfileImage)

    ProfileImage.addEventListener("click", ()=> navigateTo('/profile'))

}