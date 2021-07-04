import Card from "components/card";

function App() {
  return (
    <div>
      <Card>
        <Card.Image 
          src="https://reqres.in/img/faces/7-image.jpg"
          alt="Alternative message"
        />
      </Card>
    </div>
  );
}

export default App;
