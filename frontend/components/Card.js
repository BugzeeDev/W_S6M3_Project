import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1.2rem;
  background-color: rgb(243, 241, 241);

  h2 {
    font-size: 2.4em;
    color:rgb(252, 62, 33);
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5rem;
    }
  }


`

export default function Card({ title, text, imageURL, author, date }) {
    return (
      <StyledCard className='card'>
      <h2>{ title }</h2>
      <p>{ text }</p>
      <Figure imageURL={imageURL} author={author} date={date} />
    </StyledCard>
    )
  }
  