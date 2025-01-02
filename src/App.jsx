import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import rules from './assets/rules.jpg'
import payment from './assets/payment.jpg'
import event from './assets/event.jpg'
import CardComponent from "./components/CardComponent.jsx";


const cardData = [
    {
        image: rules,
        title: 'Regulations',
        description: 'Read up on the official regulations',
        link: '#',
        buttonText: 'Learn More'
    },
    {
        image: payment,
        title: 'Make a Payment',
        description: 'Pay fees, fines and more',
        link: '#',
        buttonText: 'Make Payment'
    },
    {
        image: event,
        title: 'Events',
        description: 'Check events, or schedule your own',
        link: '#',
        buttonText: 'Schedule Now',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'Card 4',
        description: 'This is the fourth card description.',
        link: '#',
        buttonText: 'Discover'
    }
];



function App() {
  return (
      <>
          <Navbar />
          <Header />
          <div className="container mt-5">
              <div className="row mb-5">
                  {cardData.map((card, index) => (
                      <div className="col-md-4 col-12 mb-4" key={index}>
                          <CardComponent
                              image={card.image}
                              title={card.title}
                              description={card.description}
                              link={card.link}
                              buttonText={card.buttonText}
                          />
                      </div>
                  ))}
              </div>
          </div>
      </>
  )
}

export default App
