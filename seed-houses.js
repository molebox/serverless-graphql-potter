const fetch = require('node-fetch');
const { client, query } = require('./functions/graphql/db');
const q = query;
const potterEndPoint = `https://www.potterapi.com/v1/houses/?key=${process.env.POTTER_KEY}`;

fetch(potterEndPoint)
    .then(res => res.json())
    .then(res => {
        console.log({res});
        const houseArray = res.map((char, index) => ({
            _id: char._id,
            name: char.name,
            colors: char.colors,
            founder: char.founder,
            headOfHouse: char.headOfHouse,
            houseGhost: char.houseGhost,
            mascot: char.mascot,
            members: char.members,
            values: char.values
        }));

        client
            .query(
                q.Map(
                    houseArray,
                    q.Lambda(
                        'house',
                        q.Create(q.Collection('Houses'), {data: q.Var('house')})
                    )
                )
            )
            .then(console.log('Wrote potter houses to FaunaDB'))
            .catch(err => console.log('Failed to add houses to FaunaDB', err));
    })