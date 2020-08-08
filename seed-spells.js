const fetch = require('node-fetch');
const { client, query } = require('./functions/graphql/db');
const q = query;
const potterEndPoint = `https://www.potterapi.com/v1/spells/?key=${process.env.POTTER_KEY}`;

fetch(potterEndPoint)
    .then(res => res.json())
    .then(res => {
        console.log({res});
        const spellsArray = res.map((char, index) => ({
            _id: char._id,
            effect: char.effect,
            spell: char.spell,
            type: char.type
        }));

        client
            .query(
                q.Map(
                    spellsArray,
                    q.Lambda(
                        'spell',
                        q.Create(q.Collection('Spell'), {data: q.Var('spell')})
                    )
                )
            )
            .then(console.log('Wrote potter spells to FaunaDB'))
            .catch(err => console.log('Failed to add spells to FaunaDB', err));
    })
