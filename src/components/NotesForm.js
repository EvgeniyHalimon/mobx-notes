import React, { useState } from 'react';
import { Container, Button, Form, FloatingLabel} from 'react-bootstrap';
import { useNotesStore } from './NotesContext';


export const NotesForm = () => {
    const [notes, setNotes] = useState("")
    const notesStore = useNotesStore()

    return (
        <Container
            id='notes-container'
        >
            <FloatingLabel
                label="Type a note"
            >
                <Form.Control 
                    placeholder="Type a note"
                    id='notes-fiels'
                    type="text" 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </FloatingLabel>
            <Button
            size="lg"
            variant='warning'
            onClick={() => notesStore.addNote(notes)}
            >
                Add note
            </Button>


        </Container>
    )
}
