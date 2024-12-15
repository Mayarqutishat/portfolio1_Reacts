import React from 'react';

// Reusable Highlight Card Component
const HighlightCard = ({ title }) => (
  <div className="card highlight-card">
    <p>{title}</p>
  </div>
);

function Highlight() {
  // Highlight data
  const highlights = [
    "Time Management",
    "Continuous Learner",
    "Team Working",
  ];

  return (
    <section className="highlight" id="highlight">
      <h2>Highlights</h2>
      <div className="highlight-container">
        {highlights.map((highlight, index) => (
          <HighlightCard key={index} title={highlight} />
        ))}
      </div>
    </section>
  );
}

export default Highlight;
