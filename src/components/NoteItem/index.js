// Write your code here
import {
  NoteDetailsContainer,
  NoteDetailsTitle,
  NoteDetailsDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, textAreaDescription} = noteDetails

  return (
    <NoteDetailsContainer>
      <NoteDetailsTitle>{title}</NoteDetailsTitle>
      <NoteDetailsDescription>{textAreaDescription}</NoteDetailsDescription>
    </NoteDetailsContainer>
  )
}

export default NoteItem
