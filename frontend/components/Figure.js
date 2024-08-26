import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
  width: 85vw; /* Ensure the figure stretches across the viewport width */
  margin: 0; /* Remove default margin to prevent unwanted spacing */
  overflow: hidden; /* Hide any overflow to prevent scrollbars */
`;

const StyledImage = styled.img`
  width: 100%; 
  height: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 12px;
  object-fit: cover; 
`;



export default function Figure({imageURL, author, date}) {
    return (
      <StyledFigure>
        <StyledImage src={imageURL} />
        <figcaption>Astronomy Photo of the Day by {author ? `${author}` : `"undefined"`} on {date}</figcaption>
      </StyledFigure>
    )
  }