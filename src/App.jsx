import Accordion from "./components/accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why working with us?</h2>
      <Accordion className='accordion'>
        <Accordion.Item id='advantages' className='accordion-item' > 
          <Accordion.Title className='accordion-item-title'>'We are the best'</Accordion.Title>
          <Accordion.Content className='accordion-item-content'> 
            <article>
              <p> You can rely on us !</p>
              <p> We also want to be better in our business!</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id='offers' className='accordion-item'> 
          <Accordion.Title className='accordion-item-title'>'We know what you need'</Accordion.Title>
          <Accordion.Content className='accordion-item-content'>
            <article>
              <p> We make your life better!</p>
              <p> We can make your dreams come true</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>
}

export default App;
