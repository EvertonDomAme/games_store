import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`

export const Image = styled.img`
  width: 97.7vw;
  height: 70vh;
  border-radius: 10px;
`

export const Bar = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`

export const Disponivel = styled.span`
  font-size: 1.6em;
  font-weight: 700;
  color: #1a1a1a;
`

export const MaisBtn = styled.button`
  background-color: #e60012;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: none;
  border-radius: 0.8rem;
  padding: 2rem 0.8rem;
  margin: 0 1rem;
`

export const MaisLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5em;
`

export const Classification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AgeClassification = styled.div`
  background-color: #2193D1;
  height: 3rem;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 2em;
`

export const ClassText = styled.span`
  padding: 0 1rem;
  width: 10rem;
  color: #484848;
  font-size: 0.8em;
`