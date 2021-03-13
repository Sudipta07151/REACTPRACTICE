import React from 'react';
import Accordion from './Accordion';
import Search from './Search'

const items = [
    {
        title: 'The Shawshank Redemption',
        description: 'Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.'
    },
    {
        title: 'Forrest Gump',
        description: 'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.'
    },
    {
        title: 'Jurassic Park',
        description: 'John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island\'s security system causes the creatures to escape and bring about chaos.'
    }

]

const App = () => {
    return (
        // <Accordion items={items} />,
        <Search />
    );
}

export default App;