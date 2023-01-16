/* eslint-disable no-unused-vars */
import React from 'react'

function getToken() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('user_token');
        if (!token) return null;
        else {
            return {token: JSON.parse(token)}
        }
    }
}

export default getToken