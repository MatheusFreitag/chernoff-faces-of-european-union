"use client";
import react, { useRef, useEffect } from "react";
import styles from "./ChernoffFace.module.css";
import * as d3 from "d3";
import Mouth from "./FaceParts/Mouth";
import Body from "./FaceParts/Body";
import Eyes from "./FaceParts/Eyes";
import Nose from "./FaceParts/Nose";
import Neck from "./FaceParts/Neck";
import Eyebrows from "./FaceParts/Eyebrows";
import { useAppContext } from "@/app/contexts/appContext";

const ChernoffFace = ({
  chernoffAttributes,
  country,
  externalClass,
  onClickFn,
}) => {
  const svgRef = useRef(null);
  const { countryCard } = useAppContext();

  useEffect(() => {
    const baseSVG = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", "108px")
      .attr("height", "108px")
      .attr("viewBox", "0 0 108 108");

    Body(baseSVG, chernoffAttributes.body);

    Eyebrows(baseSVG, chernoffAttributes.eyebrows);

    Eyes(baseSVG);

    Nose(baseSVG, chernoffAttributes.nose);

    Mouth(baseSVG, chernoffAttributes.mouth);

    Neck(baseSVG, chernoffAttributes.neck);
  }, [countryCard]);

  return (
    <div
      key={`${country}_${Math.random()}`}
      className={`${styles[country]} ${styles[externalClass]}`}
      ref={svgRef}
      onClick={onClickFn}
    ></div>
  );
};

export default ChernoffFace;
