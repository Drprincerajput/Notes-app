const fs = require('fs')
const chalk = require('chalk')

//add note
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.find(function (note) {
        return note.title === title
    })


    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.cyan.italic('New note added!'))
    } else {
        console.log(chalk.green.bgWhite.bold('Note title taken!'))
    }
}


//remove note
const removeNote = function(title){

    const notes = loadNotes()
    const rm = notes.filter(function (note) {
        return note.title !== title
    })
    if (rm.length<notes.length){
        saveNotes(rm)
        console.log(chalk.blue('remove!'))
    }else {
        console.log(chalk.red('not find'))
    }

}


// listNote
const listNote = () =>{
    const notes = loadNotes()
    console.log(chalk.yellow.bold('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}


// readNote
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note){
        console.log(chalk.inverse.red.bold('your note'))
        console.log(note.body)
    }else {
        console.log('not found')
    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}



module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote: listNote,
    readNote:readNote
}