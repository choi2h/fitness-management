import styled from "styled-components";

function WelcomeLayout({children}) {
    return (
        <LayoutBackground>
            <ContentBox>
                <h1>content</h1>
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
    min-height: 580px;
    min-width: 800px;
    background: #ffffff;
    border-radius: 30px;
`;

export default WelcomeLayout;