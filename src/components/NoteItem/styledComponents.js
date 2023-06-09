// Style your elements here
import styled from 'styled-components'

export const NoteDetailsContainer = styled.li`
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 2px 4px 0px #bfbfbf;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 180px;
    margin-right: 10px;
  }
`
export const NoteDetailsTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
`
export const NoteDetailsDescription = styled.p`
  font-size: 18px;
  font-weight: normal;
`
