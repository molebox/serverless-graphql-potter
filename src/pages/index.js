import React from 'react'
import {gql, useQuery} from '@apollo/client';
// import { graphql } from 'gatsby'

const GET_CHARACTERS = gql`
    query GetCharacters {
        allCharacters {
            _id
            name
            house
            patronus
            bloodStatus
            role
            school
            deathEater
            dumbledoresArmy
            orderOfThePheonix
            ministryOfMagic
            alias
            wand
            boggart
            animagus
          }
    }
`;

export default () => {
    const { loading, error, data} = useQuery(GET_CHARACTERS);
    console.log({data});

    // React.useEffect(() => {
    //     refetch();
    // }, [data])
    return (
        <div>
            <h1>Potter Site</h1>
            {loading ? <div>loading....</div> : null}
            {error ? <div> Error: {error.message}</div> : null}
            {!loading && !error && (
                data.allCharacters.map((char, index) => (
                    <p key={char.name + index}>{char.name}</p>
            )))}

        </div>
    )
}

// export const query = graphql`
//     {
//         potterAPI {
//             allCharacters {
//                 name
//             }
//         }

//     }
// `;
