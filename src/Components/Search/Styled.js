import styled from 'styled-components';

export const Search = styled.div`
  background-color: #f8f8f8;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
` 

export const SearchSpan = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  padding: 0 1rem;
`

export const SearchForm = styled.form`
  background-color: #fff;
  padding: 1rem;
`

export const ContentSearch = styled.input`
  margin: 0 0.5rem;
  width: 32rem;
  padding: 0.5rem;
  font-size: 1.1em;
  border: none;
`

export const SubmitSearch = styled.input`
  margin: 0 0.5rem;
  width: 10rem;
  padding: 1rem;
  font-size: 1.1em;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(25, 28, 216, 0.356);
    transition: all 200ms ease;
  }
`