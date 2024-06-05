import Accordion from "./components/accordion/Accordion";
import SearchableList from "./components/searchebleList/SearchebleList";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

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
    <section>
      <SearchableList items={PLACES}/>
      <SearchableList items={['item1', 'item2']} />
    </section>
  </main>
}

export default App;
