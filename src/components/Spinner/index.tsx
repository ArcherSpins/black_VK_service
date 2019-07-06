import React from 'react';
import styled from 'styled-components';

class SpinnerComponent extends React.Component {

    render() {
        return(
            <Container>
                <Image source={{uri: 'https://static.tildacdn.com/tild3936-3039-4162-a338-346639313136/3vpA_1.gif'}} />
                <Title>Loading..</Title>
                <MiniImage source={{uri: 'https://complexsys.ru/upload/iblock/638/63845d05ce08ff713109221b75c07b3d.gif'}} />
                <MiniImage2 source={{uri: 'https://complexsys.ru/upload/iblock/638/63845d05ce08ff713109221b75c07b3d.gif'}} />
            </Container>
        )
    }
};

const Image = styled.Image`
    width: 40%;
    height: 38%;
`;

const Container = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0);
    background-color: black;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    text-align: center;
    color: gold;
    font-size: 26px;
`;

const MiniImage = styled.Image`
    width: 20%;
    height: 20%;
    position: absolute;
    top: 10px;
    left: 10px;
`;

const MiniImage2 = styled.Image`
    width: 20%;
    height: 20%;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export { SpinnerComponent }

