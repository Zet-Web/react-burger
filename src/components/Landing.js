import React from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  };
  displayList = () => {
    const { display } = this.state;
    this.setState({
      display: !display,
    });
  };

  getTitle = (restaurant) => {
    // console.log(restaurant);
    const { title, url } = restaurant;
    this.setState({
      title,
      url,
      display: false,
    });
  };
  goToRestaurant = () => {
    // console.log("go to restaurant");
    const { url } = this.state;
    this.props.history.push(`/restaurant/${url}`);
  };

  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline"
          >
            {this.state.title ? this.state.title : "Выбери ресторан"}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"> </div>
            <div className="arrow_picker-down"> </div>
          </div>
        </div>

        {this.state.display ? (
          <div className="restaurant_select_bottom">
            <ul>
              {restaurants.map((restaurants) => {
                // console.log(restaurants);
                return (
                  <li
                    onClick={() => this.getTitle(restaurants)}
                    key={restaurants.id}
                  >
                    {restaurants.title}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {this.state.title && !this.state.display ? (
          <button onClick={this.goToRestaurant}> Перейти в ресторан</button>
        ) : null}
      </div>
    );
    // return React.createElement("p", { className: "first" }, "hello");
  }
}
export default Landing;
