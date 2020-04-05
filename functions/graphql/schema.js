const { gql } = require('apollo-server-lambda');

exports.typeDefs = gql`
    type Query {
        allCharacters: [Character]!
        characterById(_id: ID!): Character
        characterByName(name: String!): Character

        allHouses: [House]!
        houseById(_id: ID!): House
        houseByName(name: String!): House

        allSpells: [Spell]!
    }

    type Mutation {
        createCharacter(
            _id: ID!, 
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
            _id: ID!, 
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
        _id: ID, 
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
        _id: ID
        name: String
        colors: [String]
        founder: String
        headOfHouse: String
        houseGhost: String
        mascot: String
        members: [String]
        values: [String]
    }

    type Spell {
        _id: ID
        effect: String
        spell: String
        type: String
    }
`;