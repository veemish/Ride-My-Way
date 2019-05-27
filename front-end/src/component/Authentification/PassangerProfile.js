import React, { Commit } from "react";
import { Link } from "react-router-dom";

class PassangerProfile extends Commit() {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="block1">
              <p>
                <b>First name</b>
                mary
                <br />
                <b>Last name:</b>
                michael
                <br />
                <b>Email:</b>
                mliku@gmail.com
              </p>
              <br />
            </div>

            <div class="block2">
              <h2>Rides available</h2>
              <table>
                <tr>
                  <th>Destination</th>
                  <th>Price</th>
                  <th>Driver name</th>
                  <th>Car type</th>
                  <th>Car number</th>
                  <th>Action</th>
                </tr>

                <tr>
                  <td>Makumbusho</td>
                  <td>8000tshs</td>
                  <td>Hassan manyama</td>
                  <td>minicooper</td>
                  <td>tzd1234</td>
                  <td>
                    <Link>Select a ride</Link>
                  </td>
                </tr>
                <tr>
                  <td>Makumbusho</td>
                  <td>14000tshs</td>
                  <td>Juma Juma</td>
                  <td>minivan</td>
                  <td>twd234</td>
                  <td>
                    <Link>Select a ride</Link>
                  </td>
                </tr>
                <tr>
                  <td>Makumbusho</td>
                  <td>6500tshs</td>
                  <td>Salim Juma</td>
                  <td>Toyata</td>
                  <td>wer3456</td>
                  <td>
                    <Link>Select a ride</Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PassangerProfile;
