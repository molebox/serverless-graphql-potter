const { gql } = require('apollo-server-lambda');

exports.typeDefs = gql`
    type Query {
        allCharacters: [Character]!
        characterById(id: ID!): Character
        characterByName(name: String!): Character

        allHouses: [House]!
        houseById(id: ID!): House
        houseByName(name: String!): House

        allSpells: [Spell]!
    }

    type Mutation {
        createCharacter(
            id: ID!, 
            name: String!
            house: String
            patronus: String
            bloodStatus: String
            role: String
            school: String
            deathEater: Boolean
            dumbledoresArmy: Boolean
            orderOfThePheonix: Boolean
            ministryOfMagic: Boolean
            alias: String
            wand: String
            boggart: String
            animagus: String
        ): Character
        updateCharacter(
            id: ID!, 
            name: String!
            house: String
            patronus: String
            bloodStatus: String
            role: String
            school: String
            deathEater: Boolean
            dumbledoresArmy: Boolean
            orderOfThePheonix: Boolean
            ministryOfMagic: Boolean
            alias: String
            wand: String
            boggart: String
            animagus: String
        ): Character
        deleteCharacter(id: ID!): Character
    }

    type Character {
        id: ID, 
        name: String!
        house: String
        patronus: String
        bloodStatus: String
        role: String
        school: String
        deathEater: Boolean
        dumbledoresArmy: Boolean
        orderOfThePheonix: Boolean
        ministryOfMagic: Boolean
        alias: String
        wand: String
        boggart: String
        animagus: String
    }

    type House {
        id: ID!
        name: String!
        colors: [String]
        founder: String
        headOfHouse: String
        houseGhost: String
        mascot: String
        members: [String]
        values: [String]
    }

    type Spell {
        id: ID!
        effect: String
        spell: String
        type: String
    }
`;