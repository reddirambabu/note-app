// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 10px;
`

export const NotesContainer = styled.div`
  padding: 10px;
`

export const NoteHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 28px;
  font-weight: bold;
  color: #4c63b6;
  text-align: center;
`
export const NoteFormContainer = styled.form`
  padding: 12px;
  box-shadow: 0px 4px 8px 0px #bfbfbf;
  display: flex;
  flex-direction: column;
`
export const NoteInput = styled.input`
  height: 45px;
  outline: none;
  border: none;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  color: gray;
`
export const NoteTextArea = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  color: gray;
  border: none;
  outline: none;
`
export const NoteButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4c63b8;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 3px;
  border: none;
  align-self: flex-end;
`
export const EmptyContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmptyImage = styled.img`
  width: 90px;
  height: 80px;
`
export const EmptyHeading = styled(NoteHeading)`
  font-size: 23px;
  font-family: 'Roboto';
`
export const EmptyDescription = styled.p`
  font-size: 18px;
  color: #4c63b6;
`
export const UnOrderList = styled.ul`
    list-style-type:none ; 
    padding:0px ; 
    display:flex ; 
    flex-wrap:wrap :
`
