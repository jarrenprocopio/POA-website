import woodlandbg from "../assets/woodlandbg.jpg"

export default function Header()
{
    return (
        <header
            className="header"
            style={{
                backgroundImage: `url(${woodlandbg})`, // Replace with your image URL
                backgroundSize: "cover", // Ensures the image covers the entire header
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents tiling
                height: "500px", // Adjust height as needed
                color: "white", // Ensures text is readable
                display: "flex", // Centers content vertically and horizontally
                alignItems: "center",
                justifyContent: "start",
                paddingLeft: "2rem", // Off-center the text a bit
            }}
        >
            <h1
                style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.6)", // Adds a text shadow for better readability
                }}
            >
                Welcome to Country Living
            </h1>
        </header>
    );
}
