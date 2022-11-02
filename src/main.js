const {Op} = require('sequelize')
const { Author, Book, db } = require('../models/models')

async function main() {

    // show update
    await Author.update({
        name: "Tom Holland"
    },
    {
        where: {
            name: "Rom Holland"
        }
    })

    // const a1 = await Author.create({
    //     name: "Rom Holland",
    //     field: "History"
    // })

    // console.log(a1.toJSON())

    // await a1.update({
    //     name: "Tom Holland"
    // })

    // console.log(a1.toJSON())

    // SELECT * FROM Authors
    const authors = await Author.findAll();
    console.log("Authors:", JSON.stringify(authors, null, 3))
    console.table(authors.map(author => author.toJSON()))

    const authorsBest = await Author.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
    })
    console.table(authorsBest.map(author => author.toJSON()))


    // SELECT title, author_id AS 'Author ID' FROM Books
    const books = await Book.findAll({
        attributes: ['title', ['author_id', 'Author ID']]
    })
    // console.log("Books:", JSON.stringify(books, null, 3))

    // This assumes that the operation is WHERE author_id = 4
    // It assumes equality.
    // SELECT * FROM books WHERE author_id = 4
    const someBooks = await Book.findAll({
        where: {
            author_id: 4
        }
    })

    // ^ is equivalent to:
    // const someBooks = await Book.findAll({
    //     where: {
    //         author_id: {
    //             [Op.eq]: 4
    //         }
    //     }
    // })

    // to use this require "Op" from sequelize
    // const someBooks = await Book.findAll({
    //     where: {
    //         [Op.or]: [
    //             {author_id: 4},
    //             {author_id: 5}
    //         ]
    //     }
    // })

    // console.log(JSON.stringify(someBooks, null, 3))

    // DELETE FROM Books WHERE author_id = 6 OR author_id = 7
    Book.destroy({
        where: {
            author_id: {
                [Op.or]: [6, 7]
            }
        }
    })

    const moreBooks = await Book.findAll({
        // attributes: {
        //     // include: ['title', ['author_id', 'Author ID']],
        //     exclude: ['createdAt', 'updatedAt']
        // }

        attributes: ['title', ['author_id', 'Author ID']]
    })
    // console.log("Books:", JSON.stringify(moreBooks, null, 3))
    console.table(moreBooks.map(b => b.toJSON()))

    
}

main()