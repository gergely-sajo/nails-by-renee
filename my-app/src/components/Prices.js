import React from 'react';

function Prices() {
  return (
    <div id="arak" className="page-section">
      <div className="wrapper">
        <h2 className="page-section__title">Árlista</h2>
        <div id="manicure">
          <h3 className="page-section__subtitle">Manikűr</h3>
          <table id="manicure" className="page-section__centered">
            <tbody>
              <tr>
                <td>Hagyományos</td>
                <td>2000.-</td>
              </tr>
              <tr>
                <td>Gép</td>
                <td>2500.-</td>
              </tr>
              <tr>
                <td>Gél lakk megerősített technikával</td>
                <td>5800.-</td>
              </tr>
              <tr>
                <td>Francia szabadszél-Baby boomer</td>
                <td>+400.-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="artificial-nail">
          <h3 className="page-section__subtitle">Műkörömépítés zselével (hagyományos + gépi manikűr)</h3>
          <table id="manicure" className="page-section__centered">
            <tbody>
              <tr>
                <td>S méret</td>
                <td>6800.-</td>
              </tr>
              <tr>
                <td>M méret</td>
                <td>7500.-</td>
              </tr>
              <tr>
                <td>L méret</td>
                <td>8100.-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Prices
