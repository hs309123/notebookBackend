const Note = require("../model/note.model.js")


const createNote = async (req, res) => {

    const { title, description } = req.body

    const newNote = await Note.create({
        title, description
    })


    return res.status(200).json({ message: "Note created successfully", note: newNote.toJSON() })
}

const getNote = async (req, res) => {

    const { id } = req.body

    const note = await Note.findOne({ id })

    return res.status(200).json({ note: note.toJSON() })
}

const deleteNote = async (req, res) => {

    const { id } = req.body

    const note = await Note.destroy({
        where: { id }
    })

    return res.status(200).json({ note: note.toJSON() })
}

const updateNote = async (req, res) => {

    const { id, title, description } = req.body

    const note = await Note.update({ title, description }, {
        where: { id }
    })

    return res.status(200).json({ note: note.toJSON() })
}

module.exports = {
    createNote,
    getNote,
    deleteNote,
    updateNote
}