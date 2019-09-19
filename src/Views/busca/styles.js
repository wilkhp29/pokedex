import styled from 'styled-components';

export const Container = styled.div`
  padding:10px;
  padding-top:74px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1;
  flex-direction:column;
`;

export const Form = styled.form`
  background: #fff;
  padding: 20px;
  display: flex;
  width:100%;
  flex:1;
  margin-bottom:20px;
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 46px;
    border: 0;
    border-radius: 0px 5px 5px 0;
    padding:10px;
    line-height:-10px;
  }
`;

export const PokemonConteiner = styled.div`
  background-color:#fff;
  padding:20px;
  flex:1;
  margin-top:20px;
  width:100%;
`;

export const Row = styled.div`
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   align-items:center;
   padding:20px;
   flex:1;
   div{
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     height:100%;
     flex:1;
   }
`;