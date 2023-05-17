import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { LoaderBackdrop } from './Loader.styled';


export const Loader = () => {
    return (
        <LoaderBackdrop>
            <MoonLoader/>
        </LoaderBackdrop>
    );
};