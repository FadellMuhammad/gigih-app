import React from 'react'

const CardComp = ({ImageUrl, Title, Artist}) => {
    return (
        <>
            <img src={ImageUrl} alt={Title} />
            <p>Song title : {Title}</p>
            <p>Song Artists : {Artist}</p>
            <button type='submit'>Select</button>
        </>
    )
}

export default CardComp