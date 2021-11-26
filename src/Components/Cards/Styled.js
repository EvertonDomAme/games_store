import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 0.8rem 1rem;
  width: 18rem;
  height: 22.5rem;
`
  

export const CardItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

`
  

export const CardImg = styled.img`
  width: 15rem;
  height: 10rem;
  border-radius: 0.4rem;
`

export const CardTitle = styled.h2`
  padding: 0.5rem 0;
`

export const CardPrice = styled.span`
  font-size: 2em;
`

export const WishList = styled.button`
  color: #e60013;
  font-size: 1.4em;
  padding: 0.5rem 0;
  display: flex;
  border: none;
  background-color: transparent;

  &:hover {
  cursor: pointer;
  }
`
