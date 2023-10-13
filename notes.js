const fs=require('fs')

const chalk=require('chalk')


//addnotes function
const addNotes=(title,body)=>{
    const notes=loadNotes()
    
    //to prevent adding a notes with same title
    const duplicateNote = notes.find((note)=>note.title===title)
      
        if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("New Notes added")    
    }else{
        console.log("Title taken!!")
    }

    
    saveNotes(notes)
}



//remove
const removeNotes=(title)=> {
    
    const notes=loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red('Note is not available'))
    }
}

//list notes
const listNotes=()=>{
    const notes=loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

//read notes
const readNotes=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>{
        return note.title===title
    })
    if(note){
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log("No file is here!")
    }
    
}


//to load notes
const loadNotes=function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

//to save in the file
const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//to export more than one func/modules
module.exports ={
    addNotes : addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}