import XAccordion from "./components/accordion/XAccordion";
import Frame from "./frame/Frame";

function App() {
  return (
    <div className="App">
      
      <Frame title={"Lorem ipsum dolor sit amet."} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, molestias."}>
      <XAccordion
          content={[
            {
              title: "Lorem ipsum dolor sit, amet.",
              desc: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id a eius aliquid vel asperiores! Quam neque ullam, quos placeat distinctio deleniti voluptatum officia rem pariatur praesentium, eius sunt ducimus.",
                "if you want to know more ***/contact&&&contact us*** to get more information.",
              ],
            },
            {
              title: "Lorem ipsum dolor sit, amet c.",
              desc: [
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id a eius aliquid vel asperiores! Quam neque ullam, quos placeat distinctio deleniti voluptatum officia rem pariatur praesentium, eius sunt ducimus.",
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem id a eius aliquid vel asperiores! Quam neque ullam, quos placeat distinctio deleniti voluptatum officia rem pariatur praesentium, eius sunt ducimus.",
              ],
            },
          ]}
          preExpanded={false}
        />
      </Frame>
    </div>
  );
}

export default App;
