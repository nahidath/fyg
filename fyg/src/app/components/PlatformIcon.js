


const PlatformIcon = ({ platform, size = 24, style }) => {
    const platformIcon = {
        "Windows": "windows.png",
        "Playstation": "Playstation.svg",
        "Xbox": "cib_xbox.svg",
        "Nintendo": "Nintendo.png",
        "Android": "Android OS.png",
        "iOS": "Apple_Logo.png",
        "Linux": "linux.png"
    }

    const searchString = platform.toLowerCase();
    let matchingPlatform = null;

    for (const key in platformIcon) {
        if (key.toLowerCase().includes(searchString)) {
            matchingPlatform = key;
            break; // Stop the loop after the first match
        }
    }

    if (matchingPlatform) {
        return (
            <img style={{ ...style, width: size, height: size }} src={platformIcon[matchingPlatform]} alt="" />
        );
    } else {
        return null; // Return null if no matching platform is found
    }
}
export default PlatformIcon;