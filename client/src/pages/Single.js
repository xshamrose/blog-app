import React from "react";
import user from "../assets/user.webp";
import edit from "../assets/edit.png";
import remove from "../assets/remove.jpg";
import { Link } from "react-router-dom";
import Menu from "../component/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/18985111/pexels-photo-18985111/free-photo-of-silhouetted-palm-trees-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img src={user} alt="" />
          <div className="info">
            <span>Sham</span>
            <p> posted 3 days ago </p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt=""></img>
            </Link>
            <img src={remove} alt=""></img>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet, cu duo mundi utinam. Id sea malis quodsi
          disputando. Quod aliquam accommodare ex sea, cum no partem saperet
          vivendo, sea sale placerat eu. Ad dolorem consulatu vel, vidit mutat
          scribentur ius eu. An summo argumentum quo, an inani atomorum vix. Ea
          quas expetenda nec, eum in wisi percipit. Dolores phaedrum mei ea,
          regione fastidii accusata id mel, numquam praesent eu his.
          <br />
          <br />
          Purto cibo audiam an usu, an qui illum constituto, vix omnium
          vulputate an. Mucius putant assueverit eum id. Ea mea legimus molestie
          rationibus, pro postulant intellegam at. Id natum adhuc nec, diam
          apeirian facilisis at quo. Eu est hinc utamur adversarium. Ius ea nisl
          scribentur, mea at prima mundi.
          <br />
          <br />
          Pri tantas nonumy quaestio id, ei ius mollis vidisse. At minimum
          constituam vituperatoribus mei, has no partem intellegebat. Mea mazim
          causae at. Ex pri reque paulo pericula, eum clita ornatus salutatus
          ei. Eius percipitur et cum, est ea viderer expetenda consetetur. Eos
          at meis liber argumentum, nec et facilisi elaboraret.
          <br />
          <br />
          Cu vim mundi ceteros repudiandae. Audire aliquam ex mea, laoreet
          maluisset interesset sit ad. Insolens expetenda ut eum. Vel ne nobis
          principes dissentias, sea id altera albucius. Ex dolorem fastidii pri,
          cu eros deserunt cotidieque mea. Mel an dicam exerci prodesset, cu
          magna reprimique sed.
          <br />
          <br />
          An duo tacimates rationibus. Tollit gubergren quo et, ex mea zril
          nominavi adipiscing, nec civibus temporibus id. Nec probo zril persius
          et, hinc noster repudiare sea in, ancillae offendit persequeris pri
          ad. Est et dicat semper persecuti. Quo sumo tempor id, cu pri
          expetenda aliquando scripserit, per no tation vituperata persequeris.
          Et sit quis dolor, stet nonumy iudicabit usu eu. Munere iriure
          pertinacia at sit, his erat persequeris ea, in pro mutat novum ignota.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
