import "./HeaderComponent.css";
const HeaderComponent = () => {
  const handleButtonSubmit = () => {
    window.open("https://forms.gle/zDesb8zSXy3UpooY8");
  };

  return (
    <div className="header-container">
      <h1 className="header-text">Post Revolution Graffiti in Bangladesh</h1>
      <p className="header-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        minus earum, laudantium cum autem amet nulla excepturi eligendi odit
        provident sed explicabo molestiae delectus nesciunt! Earum minima
        necessitatibus quas aut!
      </p>
      <button className="header-submit-button" onClick={handleButtonSubmit}>
        Submit Graffiti Photo
      </button>
    </div>
  );
};

export default HeaderComponent;
