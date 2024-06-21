import styled from 'styled-components';

const ButtonCategory = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 1em 0;
  flex-wrap: wrap; /* Menambahkan flex-wrap untuk mencegah elemen keluar dari container */

  > button {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.4em 1em;
    border: none;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--secondary), #ff4500);
    color: var(--surface);
    cursor: pointer;
    transition: background 0.3s ease;
  }

  > button:hover {
    background: linear-gradient(90deg, #ff4500, var(--secondary));
  }
`;

export default ButtonCategory;
