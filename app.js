const notes=require('./notes.js')

const chalk=require('chalk')

const yargs=require('yargs')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Adds a new note',
    builder:{
        title:{
            describe:'title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    description: 'Removes a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'Lists the notes',
    handler(){
        console.log(chalk.green.inverse('Your notes!'))
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'reads the note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse() 