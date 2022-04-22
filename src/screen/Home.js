import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizza_data";

export default function Home() {
  return (
    <div
    // style={{
    //   backgroundImage: url(
    //     "https://i.pinimg.com/originals/ed/6a/b6/ed6ab6d14143e648da3dc209bc204ad3.jpg"
    //   ),
    // }}
    >
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 p-5">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
