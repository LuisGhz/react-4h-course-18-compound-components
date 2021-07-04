import { Container } from "./styles/card";

const Card = ({ children, ...restProps }) => {
  return <Container { ...restProps } >{ children }</Container>
}

export default Card;