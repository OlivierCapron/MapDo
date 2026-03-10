import styled from "styled-components";

import ChampRecherche from './ChampRecherche';


const OverlayBarreRecherche = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;



border-radius: 8px;
angle: 0 deg;
opacity: 1;




  background: #FFFFFF87;
  padding: 3px 12px;
  border-radius: 8px;
  box-shadow:
    0px 4px 4px 0px rgba(0, 0, 0, 0.15),
    0 2px 8px rgba(0, 0, 0, 0.08);

  backdrop-filter: blur(8px);
  width: min(400px, 90vw);
  margin-left:20px;

  }`
const TitreBarreRecherche = styled.span`
width: 168;
height: 17;
top: 9px;
left: 13px;
angle: 0 deg;
opacity: 1;
font-weight: 400;
font-style: Regular;
font-size: 14px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`



function BarreRecherche() {

  
     return (
      <OverlayBarreRecherche>
        <TitreBarreRecherche>Rechercher un restaurant</TitreBarreRecherche>
       <ChampRecherche className="champ-recherche" ></ChampRecherche>
      </OverlayBarreRecherche>
  );
}
export default BarreRecherche;
