import styled from "styled-components";

export const Button = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.grey};
  background: transparent;
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
  border-radius: 5px;
  padding: .3rem .5rem;
  :hover{
    box-shadow: ${props => props.theme.styles.boxShadow};
  }
`
export const StatusButton = styled(Button)<{active: boolean, none: string}>`
  border: ${props => props.active ? `1px solid ${props.theme.colors.lightred}` : props.none};
`
