import styled from 'styled-components';

export const Header = styled.header`  
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 20px;`;

export const SearchForm = styled.form`
display: flex;
border-radius: 15px;
`;

export const SearchFormButton = styled.button`

margin: 10px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(178, 26, 26);
    border-radius: 20px;
    color: rgb(178, 26, 26);
    max-width: 100%;
    font-size: 18px;
    font-family: "Libre Baskerville", serif;
    background-color: rgba(224, 137, 137, 0);
    gap: 5px;
    outline: none;
    cursor: pointer;
    padding: 8px 15px;
`;

export const SearchFormInput = styled.input`
width: 300px;
    padding: 5px 10px;
    margin: 10px auto;
    outline: none;
    background-color: transparent;
    border-radius: 15px;
    color: gray;
    font-family: "Libre Baskerville", serif;
    font-size: 20px;
    font-style: italic;
    text-align: center;`;





                