import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 1.0rem;
    padding: 1.6rem 2.2rem;
    margin-bottom: 2rem;

    > h1 {
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;