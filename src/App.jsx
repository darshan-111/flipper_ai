import "./App.css";

export default function App() {
  return (
    <div>

      {/* HEADER */}
      <header className="header">
        <div className="logo">RealTrust</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <button className="contact-btn">Contact</button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Consultation, Design & Marketing</h1>
          <p>We help you grow your business with modern solutions.</p>
        </div>

        <div className="hero-form">
          <h3>Get a Free Consultation</h3>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Enter Email Address" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="City" />
          <button>Get Quick Quote</button>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="section">
        <h2>Our Projects</h2>
        <div className="cards">
          {[1, 2, 3].map((p) => (
            <div className="card" key={p}>
              <img src={`https://picsum.photos/300/200?random=${p}`} alt="project" />
              <h3>Project {p}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* HAPPY CLIENTS */}
      <section className="section">
        <h2>Happy Clients</h2>
        <div className="cards">
          {[1, 2, 3].map((c) => (
            <div className="card client" key={c}>
              <img className="client-img" src={`https://i.pravatar.cc/100?img=${c}`} alt="client" />
              <p>
                "Great experience working with this team. Highly recommended!"
              </p>
              <h4>Client {c}</h4>
              <span>CEO, Company</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 RealTrust. All rights reserved.</p>
      </footer>
    </div>
  );
}
