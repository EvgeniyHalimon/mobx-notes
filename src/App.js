import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup} from 'react-bootstrap';
import { NotesForm } from './components/NotesForm';
import { useNotesStore } from './components/NotesContext';
import { useObserver } from 'mobx-react-lite';

function App() {
  const notesStore = useNotesStore()
  return useObserver( () => (
    <Container>
      <NotesForm/>
        <ListGroup>
          {notesStore.notes.map(note => 
            <ListGroup.Item id='list' key={note.id}>
              <p id='text'>{note.text}</p>
              <span onClick={() => notesStore.deleteNote(note.id)}>❌</span>
            </ListGroup.Item>
          )}
        </ListGroup>
    </Container>
  ))
}

export default App;
