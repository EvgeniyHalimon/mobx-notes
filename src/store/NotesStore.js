// eslint-disable-next-line import/no-anonymous-default-export
import shortid from "shortid"

export function createNotesStore(){
    return{
        notes: [],
        addNote(text){
            this.notes.push({
                id: shortid.generate(),
                text,
            })
        },
        deleteNote(id){
            this.notes = this.notes.filter(item => item.id !== id)
        }
    }
}