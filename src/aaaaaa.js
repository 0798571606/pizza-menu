function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObg={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza({ pizzaObg }) {
  return (
    <li className={`pizza ${pizzaObg.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObg.photoName} alt={pizzaObg.name} />
      <div>
        <h3>{pizzaObg.name}</h3>
        <p>{pizzaObg.ingredients}</p>
        <span>{pizzaObg.soldOut ? 'SOLD OUT' : pizzaObg.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert('We are currently open!');
  // else alert('Sorry We are closed!');

  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : null}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 until {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
