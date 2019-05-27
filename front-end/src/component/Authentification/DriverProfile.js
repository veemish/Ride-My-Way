import React, { Component } from "react";
import { Link } from "react-router-dom";

class DriverProfile extends Component() {
  render() {
    return (
      <div>
        <div class="container">
          <div>
            <p>
              <b>First name</b>
              Brian
              <br />
              <b>Last name:</b>
              Lorde
              <br />
              <b>Email:</b>
              bl5@gmail.com
            </p>
            <br />
          </div>
          <div>
            <form>
              <label>Offer ride</label>
              <br />
              <input type="text" name="destination" placeholder="Destination" />
              <input type="text" name="price" placeholder="Price" />
              <Link><input type="submit" name="submit" value="Submit" /></Link>
            </form>
            <h2>Driver ride history</h2>
            <table>
              <tr>
                <th>Destination</th>
                <th>Price</th>
                <th>passanger name</th>
                <th>Car type</th>
                <th>Car number</th>
                <th>Pickup location</th>
              </tr>

              <tr>
                <td>Mbezi</td>
                <td>8000tshs</td>
                <td>Hassan manyama</td>
                <td>minicooper</td>
                <td>tzd1234</td>
                <td>Buguruni</td>
              </tr>
              <tr>
                <td>Kimara</td>
                <td>14000tshs</td>
                <td>Juma Juma</td>
                <td>minivan</td>
                <td>twd234</td>
                <td>Posta</td>
              </tr>
              <tr>
                <td>Ubungo</td>
                <td>6500tshs</td>
                <td>Salim Juma</td>
                <td>Toyata</td>
                <td>wer3456</td>
                <td>Segerea</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DriverProfile;
