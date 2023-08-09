import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Heading title={"Hello World!"} />
      <Section title={"Different Title"}>This is my section</Section>
      <Counter />
    </>
  );
}

export default App;
