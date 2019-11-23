// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import react from "react";
import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  transition: transform 0.2s ease-in;
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 5px 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  overflow: hidden;
`;
export const MainTitle = styled.h2`
  font-size: 20px;
  color: white;
  background: black;
  padding: 10px;
  text-transform: capitalize;
`;
export const RevealH3 = styled.h3`
  font-size: 25px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px;
  text-transform: capitalize;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 30%;
  transform: translateY(20px);
`;
export const DogImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
  filter: grayscale(1) blur(1px);
  transform-origin: center center;
  transform: scale(0.8);
`;
