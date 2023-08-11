import Middel from "../Components/Middel";
import Proj3 from "../Components/Project3/proj3";
import Catagori from "../Components/catagori";
import Courses from "../Components/corses";
import Hero from "../Components/hero";

import { useState } from "react"
import Teacher from "../Components/teacher";
import AboutLayout from "../Components/about";

function Home() {
  return (
    <>
      <Hero />
      <Middel />
      <Catagori />
      <Courses />
      <Teacher />
      <AboutLayout />
    </>
  )
}

export default Home;
