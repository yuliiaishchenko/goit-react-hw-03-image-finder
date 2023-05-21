import React from "react";
import PropTypes from 'prop-types';
import { Wrapper, Text } from "components/InitialStateGallery/InitialStateGallery.styled";


export const InitialStateGallery = ({ text }) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
        </Wrapper>
    );
};

InitialStateGallery.propTypes = {
    text: PropTypes.string.isRequired,
};