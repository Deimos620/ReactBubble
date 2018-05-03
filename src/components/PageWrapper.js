import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Navigation from './Navigation';

const Wrapper = styled.div`
    height: 100%;
    font-family: 'Heebo Regular';
    background-color: white;
`

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const muiTheme = getMuiTheme({
    fontFamily: 'Heebo Medium',
    palette: {
        primary1Color: '#0747A6',
        secondary1Color: '#000000',
    },
})

const PageWrapper = (props) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Wrapper>
            <Navigation />
            <MainWrapper>
                <ContentWrapper>
                    { props.children }
                </ContentWrapper>
            </MainWrapper>
        </Wrapper>
    </MuiThemeProvider>
)

export default PageWrapper;