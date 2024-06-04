import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why working with us?</h2>
      <Accordion className='accordion'>
        <AccordionItem className='accordion-item' title='We are the best'> 
          <article>
            <p> You can rely on us !</p>
            <p> We also want to be better in our business!</p>
          </article>
        </AccordionItem>
        <AccordionItem className='accordion-item' title='We know what you need'> 
          <article>
            <p> We make your life better!</p>
            <p> We can make your dreams come true</p>
          </article>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
}

export default App;
