import { Container, Image, Body, Title, Text } from "./styles/card";

const Card = ({ children, ...restProps }) => {
  return <Container { ...restProps } >{ children }</Container>
}

Card.Image = ({ src, alt, ...restProps }) => {
  return <Image src={ src } alt={ alt } { ...restProps } />
}

Card.Title = ({ children, ...restProps }) => {
  return <Title { ...restProps } >{ children }</Title>
}

Card.Body = ({ children, ...restProps }) => {
  return <Body { ...restProps } >{ children }</Body>
}

Card.Text = ({ children, ...restProps }) => {
  return <Text { ...restProps } >{ children }</Text>
}

export default Card;