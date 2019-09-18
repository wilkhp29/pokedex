import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
    height:64px;
    width:100%;
    background-color:#fc6963;
    justify-content:${props => props.nome ? 'space-between':'center'};
    align-items:center;
    color:#fff;
    padding:10px;
    span{
        
    }
`;
