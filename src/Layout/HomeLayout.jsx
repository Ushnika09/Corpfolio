import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Actions from "../components/Actions";

function HomeLayout() {

  return (
    <>
      <Hero />
      <Actions />
    </>
  );
}

export default HomeLayout;
