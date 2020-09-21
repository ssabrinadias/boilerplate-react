import React from "react";
import Structure from "../../modules/Structure";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Structure>
      <Helmet>
        <title>Boilerplate</title>
      </Helmet>
      Hello world
    </Structure>
  );
};

export default Home;
