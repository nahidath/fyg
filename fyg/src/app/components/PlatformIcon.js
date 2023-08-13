


const PlatformIcon = ({ platform, size = 24, style }) => {
    const platformIcon = {
        "PC": "window.png",
        "Playstation 4": "Playstation.svg",
        "Playstation 5": "Playstation.svg",
        "PlayStation 3": "Playstation.svg",
        "PlayStation 2": "Playstation.svg",
        "PlayStation": "Playstation.svg",
        "PS Vita": "Playstation.svg",
        "PSP": "Playstation.svg",
        "Xbox One": "cib_xbox.svg",
        "Xbox Series S/X": "cib_xbox.svg",
        "Xbox 360": "cib_xbox.svg",
        "Nintendo Switch": "Nintendo.svg",
        "Nintendo 3DS": "Nintendo.svg",
        "Nintendo DS": "Nintendo.svg",
        "Nintendo DSi": "Nintendo.svg",
        "Nintendo 64": "Nintendo.svg",
        "Nintendo": "Nintendo.svg",
        "Wii U": "Nintendo.svg",
        "Wii": "Nintendo.svg",
        "Android": "Android OS.png",
        "macOS": "Apple_Logo.png",
        "iOS": "Apple_Logo.png",
        "Linux": "linux.png"
    }
    return (
        <img style={{ ...style, width: size, height: size }} src={platformIcon[platform]} alt="" />
    )
}
export default PlatformIcon;