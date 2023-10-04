// @ts-nocheck
/* eslint-disable @next/next/no-img-element */

import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0.2,
  columnWidth: 100,
};

const Freelance = () => {
  return (
    <Masonry masonryOptions={masonryOptions} enableResizableChildren={true}>
      <div>
        <img
          src="/static/clients/th-american.jpg"
          alt="American Comfort Solutions"
        />
      </div>
      <div>
        <img src="/static/clients/th-cca.jpg" alt="College Career Advisors" />
      </div>
      <div>
        <img
          src="/static/clients/th-charliesvision.jpg"
          alt="Charlie's Vision"
        />
      </div>
      <div>
        <img src="/static/clients/th-cosmiccart.jpg" alt="Cosmic Cart" />
      </div>
      <div>
        <img src="/static/clients/th-effective.jpg" alt="Cosmic Cart" />
      </div>
      <div>
        <img src="/static/clients/th-hinson.jpg" alt="Hinson" />
      </div>
      <div>
        <img src="/static/clients/th-iac.jpg" alt="IAC" />
      </div>
      <div>
        <img src="/static/clients/th-innovation.jpg" alt="Innovation" />
      </div>
      <div>
        <img src="/static/clients/th-invision.jpg" alt="Invision" />
      </div>
      <div>
        <img src="/static/clients/th-kimbrattain.jpg" alt="Kim Brattain" />
      </div>
      <div>
        <img src="/static/clients/th-missionfilm.jpg" alt="Mission Film" />
      </div>
      <div>
        <img src="/static/clients/th-nancy.jpg" alt="Nancy" />
      </div>
      <div>
        <img src="/static/clients/th-phase2.jpg" alt="Phase 2" />
      </div>
      <div>
        <img src="/static/clients/th-righthand.jpg" alt="Right Hand" />
      </div>
    </Masonry>
  );
};

export default Freelance;
