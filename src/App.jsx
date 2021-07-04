import Card from "components/card";

function App() {
  return (
    <div>
      <Card>
        <Card.Image 
          src="https://reqres.in/img/faces/7-image.jpg"
          alt="Alternative message"
        />
        <Card.Body>
          <Card.Title>Shiang ju</Card.Title>
          <Card.Text>shiju@gmail.com</Card.Text>
          <Card.Button>Details</Card.Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
