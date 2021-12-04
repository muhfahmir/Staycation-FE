import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Activites({ data }) {
  // console.log(data);
  if (data.length === 0) return null;
  return (
    <section className="container" key={`activity`}>
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activites</h4>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item-${index2}`}
              >
                <Fade bottom delay={300 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                        type="link"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
