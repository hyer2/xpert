import React from 'react';
import data from '../data/data';

function McDonaldsLogo() {
    const mcdonaldsData = data.find(item => item.name === "맥도날드");

    return <img src={mcdonaldsData.url} alt="맥도날드 로고" />;
}

export default McDonaldsLogo;