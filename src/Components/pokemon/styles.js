import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    background-color: white;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 1px 5px 0 rgba(192, 208, 230, 0.9);
    width: 180px;
    height: 180px;
    justify-content:center;
    header {
        display: flex;
        align-items: center;

        span {
            font-weight: 600;
        }

        span::first-letter {
            text-transform: uppercase;
        }

    }

    div {
        img {
            border-radius: 50%;
            box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

        }
    }
    

`;
