import { useLocalStore } from 'mobx-react-lite';
import React from 'react';
import { createNotesStore } from '../store/NotesStore';

const NotesContext = React.createContext(null)

export const NotesProvider = ({children}) => {
    const notesStore = useLocalStore(createNotesStore)

    return <NotesContext.Provider value={notesStore}>
        {children}
    </NotesContext.Provider>
}

export const useNotesStore = () => React.useContext(NotesContext)