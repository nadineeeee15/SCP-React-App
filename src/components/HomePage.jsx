import './HomePage.css';

function HomePage({ onNavigate }) {
  return (
    <div className="home-page" data-testid="home-page">
      <div className="home-bg" />
      <div className="scanlines" />

      {/* ── HERO SECTION ── */}
      <div className="hero-section">

        {/* Big SCP letters */}
        <div className="hero-scp-letters">
          <span className="scp-letter">S</span>
          <span className="scp-letter">C</span>
          <span className="scp-letter">P</span>
        </div>

        {/* Tagline under letters */}
        <div className="hero-tagline">SECURE. CONTAIN. PROTECT.</div>

        {/* Plague doctor image centered */}
        <div className="hero-image-wrap">
          <img
            src="/PlagueBg.png"
            alt="SCP Foundation Containment Personnel"
            className="hero-img"
          />
        </div>

        {/* Warning bar */}
        <div className="hero-warning" style={{ marginTop: '0.5rem' }}>
          <span className="warning-label">⚠ WARNING</span>
          Unauthorized access is a violation of Foundation protocol.
        </div>

        {/* SCP file buttons */}
        <div className="scp-grid">
          {['SCP-002', 'SCP-003', 'SCP-004', 'SCP-005', 'SCP-006'].map((scp) => (
            <button
              key={scp}
              className="scp-card"
              onClick={() => onNavigate(scp)}
              data-testid={`home-card-${scp}`}
            >
              <span className="card-id">{scp}</span>
              <span className="card-label">VIEW FILE</span>
            </button>
          ))}
        </div>

        <div className="home-footer-text">
          © SCP Foundation · All Rights Reserved · Unauthorized reproduction is punishable under O5 mandate 7-G
        </div>
      </div>
    </div>
  );
}

export default HomePage;