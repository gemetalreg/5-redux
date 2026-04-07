import React from 'react';

export interface LoginProps {
    nameRef?: React.Ref<HTMLInputElement>; 
    handleLogin: () => void;
}