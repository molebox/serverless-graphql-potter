import React from 'react'
import { graphql } from 'gatsby'

export default ({data}) => {
    console.log({data});
    return (
        <div>
            <h1>Potter Site</h1>
            {/* {data.potterAPI.allCharacters.map((char) => (
                <p>{char.name}</p>
            ))} */}
        </div>
    )
}

export const query = graphql`
    {
        potterAPI {
            allCharacters {
                name
            }
        }

    }
`;
