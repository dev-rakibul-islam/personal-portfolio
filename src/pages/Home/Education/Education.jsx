// spell-checker: disable
import React from "react";
import "./Education.css";

const Education = () => {
  const data = [
    {
      institution: "International Islamic University Chittagong",
      degree: "BSS in Economics and Banking",
      session: "2018-22",
      image_url: "https://i.ibb.co.com/g9CpxH6/1.png",
    },
    {
      institution: "Chittagong Cantonment Public College",
      degree: "Higher Secondary Certificate (HSC)",
      session: "2016-18",
      image_url: "https://i.ibb.co.com/Zm4j0d3/2.png",
    },
    {
      institution: "Programming Hero",
      degree: "Web Development Course",
      session: "Session: 31 Dec, 2024 - 16 Jun, 2024",
      image_url: "https://i.ibb.co.com/0V8k0Qq/3.png",
    },
  ];

  return (
    <div className="programs-container">
      <h2 className="title  font-bold">🎓 My Education</h2>
      <ul className="cards">
        {data.map((item, index) => (
          <li key={index} className="card" style={{ "--index": index + 1 }}>
            <div className="card__content border-2">
              <img
                className="icon w-10 md:w-32 lg:w-48 mr-4"
                src={item.image_url}
                alt={item.institution}
              />
              <div>
                <h3 className="card-title text-xl md:text-3xl lg:text-4xl">
                  {item.institution}
                </h3>
                <p className="card-description">
                  {item.degree}
                  <br />
                  {item.session}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
