import { Container, Image } from "./styles/card";

const Card = ({ children, ...restProps }) => {
  return <Container { ...restProps } >{ children }</Container>
}

Card.Image = ({ src, alt, ...restProps }) => {
  return <Image src={ src } alt={ alt } { ...restProps } />
}

export default Card;