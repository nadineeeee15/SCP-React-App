import { useEffect, useState } from 'react';
import './SCPPage.css';

const classColors = {
  Safe: '#1a8a2a',
  Euclid: '#8a6a1a',
  Keter: '#8a1a1a',
};

function SCPPage({ scp }) {
  const [visible, setVisible] = useState(false);

//Resets scroll to top for a seamless mobile/desktop user experience
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
//Implements Intersection Observer for modern 'reveal' animations on scroll.
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2 });

      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 600);

    return () => clearTimeout(timer);
  }, [scp]);

  if (!scp) return <div className="scp-not-found">FILE NOT FOUND</div>;

  const classColor = classColors[scp.objectClass] || '#8a7a64';
  const pageClass = visible ? 'scp-page page-visible' : 'scp-page page-hidden';

  return (
    <div className={pageClass} data-testid="scp-page">
      <div className="scp-bg" />
      <div className="scp-bg-overlay" />
      <div className="scanlines" />

      <div className="scp-container">

        <div className="scp-header reveal">
          <div className="scp-header-inner">
            <div className="scp-id-block">
              <span className="scp-id-label">ITEM #</span>
              <span className="scp-id" data-testid="scp-id">{scp.id}</span>
            </div>
            <div className="scp-class-block" style={{ '--class-color': classColor }}>
              <span className="scp-class-label">OBJECT CLASS</span>
              <span className="scp-class" data-testid="scp-class">{scp.objectClass}</span>
            </div>
          </div>
          <div className="scp-header-line" />
        </div>

        <div className="scp-tags reveal" data-testid="scp-tags">
          {scp.tags.map(tag => (
            <span key={tag} className="scp-tag">{tag}</span>
          ))}
        </div>

        {scp.image && (
          <div className="scp-image-wrapper reveal" data-testid="scp-image">
            <img src={scp.image} alt={'Photograph of ' + scp.id} className="scp-image" />
            <span className="scp-image-caption">FILE PHOTO — {scp.id}</span>
          </div>
        )}

        <section className="scp-section reveal" data-testid="scp-containment">
          <h2 className="scp-section-title">
            <span className="section-marker">&#9612;</span>
            Special Containment Procedures
          </h2>
          <div className="scp-section-body">
            {scp.specialContainmentProcedures.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        <section className="scp-section reveal" data-testid="scp-description">
          <h2 className="scp-section-title">
            <span className="section-marker">&#9612;</span>
            Description
          </h2>
          <div className="scp-section-body">
            {scp.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {scp.addendum && scp.addendum.length > 0 && (
          <section className="scp-section reveal" data-testid="scp-addendum">
            <h2 className="scp-section-title">
              <span className="section-marker">&#9612;</span>
              Addendum
            </h2>
            <div className="scp-section-body">
              {scp.addendum.map((entry, i) => (
                <div key={i} className="addendum-entry reveal">
                  <span className="addendum-label">
                    Addendum {scp.id}-{String.fromCharCode(65 + i)}:
                  </span>
                  <p>{entry}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {scp.references && scp.references.length > 0 && (
          <section className="scp-section reveal" data-testid="scp-references">
            <h2 className="scp-section-title">
              <span className="section-marker">&#9612;</span>
              References
            </h2>
            <div className="scp-section-body">
              {scp.references.map((ref, i) => (
                <div key={i} className="reference-entry reveal">
                  <span className="reference-number">[{i + 1}]</span>
                  <p>{ref}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="scp-doc-footer reveal">
          <span>DOCUMENT {scp.id}</span>
          <span>CLEARANCE LEVEL: {scp.objectClass === 'Keter' ? '4' : scp.objectClass === 'Euclid' ? '3' : '2'}</span>
          <span>SCP FOUNDATION — INTERNAL DOCUMENT</span>
        </div>

      </div>
    </div>
  );
}

export default SCPPage;