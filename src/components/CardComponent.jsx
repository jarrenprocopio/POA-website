import React from 'react';
import './CardComponents.css';

/**
 * CardComponent renders a card structure with an image, title, description, and a button.
 * It is a reusable component that accepts props to display dynamic content.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.image] - The URL of an image to display at the top of the card (optional).
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - A short description or text to give more context about the card.
 * @param {string} props.link - A URL that the button will navigate to when clicked.
 * @param {string} props.buttonText - The text that will be displayed on the button.
 *
 * @returns {JSX.Element} The rendered card component.
 */
function CardComponent(props) {
    return (
        <div className="card h-100 cardbg text-light border-light shadow-lg rounded-lg">
            {/* Card Image */}
            {props.image && (
                <img
                    src={props.image}
                    className="card-img-top"
                    alt={props.title}
                    style={{
                        width: '100%', // Ensures image spans the full width of the card
                        height: '200px', // Fixed height for uniformity
                        objectFit: 'cover', // Ensures the image maintains aspect ratio while covering the area
                        borderTopLeftRadius: '0.375rem',
                        borderTopRightRadius: '0.375rem',
                    }}
                />
            )}

            <div className="card-body">
                {/* Card Title with Custom Font */}
                <h5 className="card-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem' }}>
                    {props.title}
                </h5>
                {/* Card Description */}
                <p className="card-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>
                    {props.description}
                </p>
                {/* Card Button with custom styles */}
                <a
                    href={props.link}
                    className="btn btn-light btn-outline-light bg-gradient text-dark"
                    style={{
                        fontFamily: "'Cormorant Garamond', serif", // Apply custom font to button
                        borderRadius: '0.375rem',
                        padding: '10px 20px',
                        fontSize: '1rem', // Adjusted font size for the button
                    }}
                >
                    {props.buttonText}
                </a>
            </div>
        </div>
    );
}

export default CardComponent;
