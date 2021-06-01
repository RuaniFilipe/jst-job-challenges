import styled from 'styled-components'

export const Container = styled.div`
  select{
    border-radius: 10px;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1rem;
    text-align: center;
    min-width: 25vw;
  } 
  
  option:nth-child(even){
    background: #fff;
  }

  option:nth-child(odd){
    background: #ddd;
  }
`;