import styled from "styled-components";

function WelcomeLayout({title, children}) {
    return (
        <LayoutBackground>
            <ContentBox>
                <h1>{title}</h1>
                {children}
            </ContentBox>
        </LayoutBackground>
    );
}

const LayoutBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
`;

const ContentBox = styled.div`
    padding: 24px;
    min-height: 380px;
    min-width: 600px;
    background: #ffffff;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
    }
`;

export default WelcomeLayout;