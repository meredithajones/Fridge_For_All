import React from "react";
import Row from "../Row";
import Col from "../Col";

const About = () => (
<Row>
<Col size="lg-12 md-12">
  <div className="container w-75 mt-5 mb-5 p-3 d-block">
  <h3>What are community fridges?</h3>
  Community fridges are fully stocked, volunteer-run refrigerators that are open to the general public. Anyone can take what they need, no questions asked! Did you know there are over 14 community fridges in Philadelphia? Community fridges have been popping up all over the US and have become a way for communities to battle food insecurity due to homelessness, unemployment, and stalled stimulus checks.
  <p />
  Part of the challenge of supporting a community fridge is knowing what is most needed in advance of dropping off provisions. Fridge For All aims to tackle this unique issue by creating an interactive database where users can see what's most urgent ahead of time, and plan accordingly. Users can add what they drop off to increase the total quantity for other users to see, while also being able to subtract from the quantity if they take anything home. In this way, we hope to encourage people to engage with their community more while reducing hunger and food waste.
  <p />
  <h3>Other Ways to Support</h3>
      Are you unable to donate food to the fridge, but still want to be
      supportive? Please consider donating money. It's greatly appreciated and
      goes towards keeping the fridges stocked.
      <div class="table-responsive-sm-xs">
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
            <th scope="row ">
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

      <h3>About Us</h3>
      We are three aspiring web developers creating a project for UPenn LPS Coding Boot Camp. Check out our <a href="https://github.com/meredithajones/Fridge_For_All" target="_new">Github</a>!
    </div>
    </Col>
    </Row>
 
);

export default About;