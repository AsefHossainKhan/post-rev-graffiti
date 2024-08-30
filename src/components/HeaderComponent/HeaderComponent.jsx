import "./HeaderComponent.css";
const HeaderComponent = () => {
  const handleButtonSubmit = () => {
    window.open("https://forms.gle/zDesb8zSXy3UpooY8");
  };

  return (
    <div className="header-container">
      <h1 className="header-text">
        Post Revolution Graffiti & Murals in Bangladesh
      </h1>
      <p className="header-description">
        In 2024, the student revolution in Bangladesh ignited from the remnants
        of a quota reform movement, evolving into a powerful uprising that
        toppled a long-standing government. This movement, driven by the
        youth&apos;s desire for change, transformed not only the political
        landscape but also the streets of Bangladesh. The walls became canvases
        for a relentless stream of graffiti, where colorful creations spoke
        louder than words. Each vibrant stroke expressed the deep emotions of a
        nation in turmoil, revolutionizing the streets with colors that echoed
        the voice of the people. These artistic expressions, flowing across
        every wall, immortalize the spirit of resistance and the hope for a
        brighter future.
      </p>
      <button className="header-submit-button" onClick={handleButtonSubmit}>
        Submit Graffiti Photo
      </button>
    </div>
  );
};

export default HeaderComponent;
