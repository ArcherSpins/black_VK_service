import React from 'react';
import styled from 'styled-components';

export const HeaderComponent = ({bgColor}) => {
    return(
        <Header style={{backgroundColor: bgColor, borderBottomWidth: 1, borderBottomColor: 'gray'}}></Header>
    )
}



const Header = styled.View`
    background-color: black;
    height: 80px;
`;