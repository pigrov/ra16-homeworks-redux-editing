import { Container } from "react-bootstrap";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

export default function App() {
  return (
    <Container className="App">
      <ServiceAdd />
      <ServiceList />
    </Container>
  );
}
