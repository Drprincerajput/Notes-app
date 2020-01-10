const yargs = require('yargs')
const notes  = require('./notes')


// Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
      title:{
          describe: "Note Title",
          demandOption: true,
          type: 'string'
      },
        body:{
            describe: "Content OF Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title,argv.body)
    }
})

// Create remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title:{
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }},
    handler: function (argv) {
        notes.removeNote(argv.title)

    }
})
// create Read command
yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title:{
            describe: "Note Title",
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)

    }
})
// create list command
yargs.command({
    command: 'list',
    describe: 'list a Note',
    handler: function () {
        notes.listNote()

    }
})

// console.log(yargs.argv)
yargs.parse()


