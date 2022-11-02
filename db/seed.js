const { Author, Book } = require('../models')
const db = require('./db')

async function seed() {
    // await Book.sync({
    //     force: true
    // })

    // await Author.sync({
    //     force: true
    // })


    // or I could do:
    await db.sync({
        force: true
    })

    // const a1 = Author.build({
    //     name: "Rom Holland",
    //     field: "Story"
    // })

    // await a1.save()

    // const a1 = await Author.create({
    //     name: "Rom Holland",
    //     field: "History"        
    // })

    // console.log(a1)
    // console.log(a1.toJSON())

    await Author.create({
        name: "Rom Holland",
        field: "History"
    })

    await Author.bulkCreate([
        {
            name: "Karl Popper",
            field: "Philosophy of Science"
        },
        {
            name: "Imre Lakatos",
            field: "Philosophy of Science"
        },
        {
            name: "Stephen Gaukoreger",
            field: "History and Philosophy"
        },
        {
            name: "Claire Carlisle",
            field: "Philosophy"
        },
        {
            name: "Maria Rosa Antognazza",
            field: "Philosophy"
        },
        {
            name: "Judith Wolfe",
            field: "Philosophical Theology"
        },
        {
            name: "Thomas Kuhn",
            field: "Philosophy of Science"
        }        
    ], {validate: true})
    // mention that if validate: true isn't there the constraints
    // can be violated

    await Book.bulkCreate([
        {
            title: "Leibniz: An Intellectual Biography",
            author_id: 6
        },
        {
            title: "Heidegger and Theology",
            author_id: 7
        },
        {
            title: "Spinoza's Religion",
            author_id: 5
        },
        {
            title: "The Collapse of Mechanism and the Rise of Sensibility: Science and the Shaping of Modernity, 1680-1760",
            author_id: 4
        },
        {
            title: "The Emergence of a Scientific Culture: Science and the Shaping of Modernity, 1210-1685",
            author_id: 4
        },
        {
            title: "The Natural and the Human: Science and the Shaping of Modernity, 1739-1841",
            author_id: 4
        },
        {
            title: "The Structure of Scientific Revolutions",
            author_id: 8
        }                     
    ]), {validate: true}

    
}

seed()