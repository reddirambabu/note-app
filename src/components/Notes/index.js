// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  NotesContainer,
  NoteHeading,
  NoteFormContainer,
  NoteInput,
  NoteTextArea,
  NoteButton,
  EmptyContainer,
  EmptyImage,
  EmptyDescription,
  EmptyHeading,
  UnOrderList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [textAreaDescription, setTextAreaDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTextAreaDescription = event => {
    setTextAreaDescription(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      textAreaDescription,
    }

    setNotesList(previousList => [...previousList, newNote])
    setTitle('')
    setTextAreaDescription('')
  }

  const renderBottomSection = () => {
    const noteListLength = notesList.length
    return noteListLength > 0 ? (
      <UnOrderList>
        {notesList.map(each => (
          <NoteItem noteDetails={each} key={each.id} />
        ))}
      </UnOrderList>
    ) : (
      <EmptyContainer>
        <EmptyImage
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <EmptyHeading>No Notes Yet</EmptyHeading>
        <EmptyDescription>Notes you add will appear here</EmptyDescription>
      </EmptyContainer>
    )
  }

  return (
    <AppContainer>
      <NotesContainer>
        <NoteHeading>Notes</NoteHeading>
        <NoteFormContainer onSubmit={onSubmitForm}>
          <NoteInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteTextArea
            cols="20"
            rows="4"
            value={textAreaDescription}
            onChange={onChangeTextAreaDescription}
            placeholder="Take a Note..."
          />
          <NoteButton>Add</NoteButton>
        </NoteFormContainer>

        {renderBottomSection()}
      </NotesContainer>
    </AppContainer>
  )
}

export default Notes
