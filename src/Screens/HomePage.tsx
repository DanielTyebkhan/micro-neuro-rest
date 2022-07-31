import React from 'react'
import { ButtonAM, Container } from '../components/CustomStyled'
import { useSettings } from '../Context/SettingsProvider';
import { AlertnessPageName } from './AltertnessPage';

export const HomePageName = 'HomePage';

export const HomePage = ({navigation}) => {
    const { lang } = useSettings();
    const startFocus = () => navigation.navigate(AlertnessPageName);
    return (
        <Container>
            <ButtonAM onPress={startFocus} text={lang.startFocus}></ButtonAM>
        </Container>
    );
};