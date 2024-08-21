import './App.css';

function App() {
  const startYear = 2020;
  const totalImages = 24;

  const generateImagesPerYear = () => {
    const years = [];
    let remainingImages = totalImages;
    while (remainingImages > 0) {
      const imagesThisYear = Math.max(2, Math.min(5, Math.floor(Math.random() * 4) + 2, remainingImages));
      years.push(imagesThisYear);
      remainingImages -= imagesThisYear;
    }
    return years;
  };

  const imagesPerYearArray = generateImagesPerYear();

  return (
    <div className="container">
      {imagesPerYearArray.flatMap((imagesThisYear, yearIndex) => [
        ...([...Array(imagesThisYear)].map((_, imageIndex) => (
          <div key={`${yearIndex}-${imageIndex}`} className="timeline-item">
            <div className="timeline-segment">
              {imageIndex === 0 && (
                <div className="year-marker">
                  <div className="year-label">{startYear + yearIndex}</div>
                </div>
              )}
            </div>
            <div className="box"></div>
          </div>
        ))),
        <div key={`gap-${yearIndex}`} className="timeline-gap"></div>
      ])}
    </div>
  );
}

export default App;
