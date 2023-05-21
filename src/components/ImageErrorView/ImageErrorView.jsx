import  { errorMessage } from '../images/error-message.png';
import { Wrapper,ErrorImg, Text } from './ImageErrorView.styled';
import PropTypes from 'prop-types';

export default function ImageErrorView ({ message }) {
    return (
        <Wrapper role="alert">
            <ErrorImg src={errorMessage}/>
                <Text>{message}</Text>
        </Wrapper>
    );
};


ImageErrorView.propTypes = {
    message: PropTypes.string
};