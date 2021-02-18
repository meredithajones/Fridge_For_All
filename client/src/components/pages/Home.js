import React from "react";
import "../../index.css";

const Home = () => (
  <>
    <div className="container rounded w-75 mt-5 mb-5 p-3 d-block">
      <img
        src="imgs/FFA.png"
        width="30%"
        className="img-fluid rounded float-left m-3"
        alt="Fridge For All"
      />
      <h1>Hi there!</h1>
      Thanks for checking out Fridge For All. We hope you find what you're
      looking for! Here is where you can find out more information about the
      community fridges in Philadelphia and most importantly check the inventory
      of your local fridge! To get started, click on "Check the Fridge" above.
    </div>
    <div className="container rounded w-75 mx-auto mt-5 p-5 d-block">
      Are you unable to donate food to the fridge, but still want to be
      supportive? Please consider donating money. It's greatly appreciated and
      goes towards keeping the fridges stocked.
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Venmo</th>
            <th scope="col">CashApp</th>
            <th scope="col">GoFundMe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              @<a href="https://venmo.com/GermantownFridge">GermantownFridge</a>
            </th>
            <td>
              <a href="https://cash.app/$germantownfridge">$germantownfridge</a>
            </td>
            <td>
              <a href="https://gofund.me/86c2b94e">Mama-Tee</a>
            </td>
          </tr>

          <tr>
            <th scope="row">
              @
              <a href="https://venmo.com/thepeoplesfridge215">
                thepeoplesfridge215
              </a>
            </th>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">
              @
              <a href="https://venmo.com/southphlcommunityfridge">
                southphlcommunityfridge
              </a>
            </th>
            <td>
              <a href="https://cash.app/$SouthPhillyFridge">
                $SouthPhillyFridge
              </a>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default Home;
