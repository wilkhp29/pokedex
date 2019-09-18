import styled from 'styled-components';

export const Container = styled.div`
  padding:10px;
  padding-top:74px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1;
`;

export const Form = styled.form`
  background: #fff;
  padding: 20px;
  display: flex;
  flex:1;
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
