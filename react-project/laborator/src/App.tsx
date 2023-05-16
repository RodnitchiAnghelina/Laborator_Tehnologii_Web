import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import './styles.css';

function Home() {
  return (
    <div>
      <header>
        <h1>Travel App</h1>
      </header>
      <section>
        <h2>Home</h2>
        <p>Welcome to our travel app!</p>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <header>
        <h1>Travel App</h1>
      </header>
      <section>
        <h2>About</h2>
        <p>Our travel app helps you plan your next adventure!</p>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <header>
        <h1>Travel App</h1>
      </header>
      <section>
        <h2>Contact</h2>
        <p>Get in touch with us:</p>
        <ul>
          <li>Email: contact@travelapp.com</li>
          <li>Phone: 555-1234</li>
        </ul>
      </section>
    </div>
  );
}

function Destinations() {
  const destinations = [
    { id: '1', name: 'Paris', description: 'The City of Light', image: 'https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_667548661.png.webp' },
    { id: '2', name: 'Tokyo', description: 'A vibrant city with something for everyone', image: 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg' },
    { id: '3', name: 'New York', description: 'The Big Apple', image: 'https://www.offsoho.com/images/NYC_000021208828-2100-980.jpg' },
  ];
  

  return (
    <div className="destinations">
      <header>
        <h1>Travel App</h1>
      </header>
      <section>
        <h2>Destinations</h2>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.id} style={{ backgroundImage: `url(${destination.image})` }}>
              <Link to={`/destination/${destination.id}`}>
                {destination.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
  
          }  

function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destinations = [
    { id: '1', name: 'Paris', description: 'The City of Light' },
    { id: '2', name: 'Tokyo', description: 'A vibrant city with something for everyone' },
    { id: '3', name: 'New York', description: 'The Big Apple' },
  ];
  const destination = destinations.find((destination) => destination.id === id);

  if (!destination) {
    return <div className="destination-detail">Destination not found</div>;
  }

  return (
    <div className="destination-detail">
    <header>
    <h1>{destination.name}</h1>
    </header>
    <section>
    <p>{destination.description}</p>
    </section>
    </div>
    );
    }
    
    function App() {
    return (
    <BrowserRouter>
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/destinations">Destinations</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/destination/:id" element={<DestinationDetail />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    );
    }
    
    export default App;
