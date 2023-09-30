"use client";
import ChernoffFace from "../ChernoffFace/ChernoffFace";
import MapFrame from "../MapFrame/MapFrame";
import Map from "../Map/Map";
import { dataset } from "../constants";
import { useAppContext } from "@/app/contexts/appContext";
import { useEffect } from "react";

const ChernoffMap = () => {
  const { updateCountryCard, toggleModalVisibility, isModalVisible } =
    useAppContext();

  const onChernoffFaceClick = (countryData) => {
    updateCountryCard(countryData);
    toggleModalVisibility();
  };

  const faces = [
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "low",
        mouth: "high",
        nose: "low",
        neck: "low",
      }}
      country="Austria"
      externalClass={"face"}
      key={`${"Austria"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Austria"])}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "high",
        neck: "low",
      }}
      country="Belgium"
      key={`${"Belgium"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Belgium"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "high",
        mouth: "low",
        nose: "low",
        neck: "high",
      }}
      country="Bulgaria"
      key={`${"Bulgaria"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Bulgaria"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "high",
        mouth: "low",
        nose: "low",
        neck: "high",
      }}
      country="Croatia"
      key={`${"Croatia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Croatia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "low",
      }}
      country="Cyprus"
      key={`${"Cyprus"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Cyprus"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "high",
      }}
      country="Czechia"
      key={`${"Czechia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Czechia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "low",
        mouth: "high",
        nose: "low",
        neck: "low",
      }}
      country="Denmark"
      key={`${"Denmark"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Denmark"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "low",
        nose: "low",
        neck: "low",
      }}
      country="Estonia"
      key={`${"Estonia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Estonia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "low",
        mouth: "high",
        nose: "high",
        neck: "high",
      }}
      country="Finland"
      key={`${"Finland"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Finland"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "high",
        neck: "low",
      }}
      country="France"
      key={`${"France"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["France"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "low",
        mouth: "neutral",
        nose: "high",
        neck: "high",
      }}
      country="Germany"
      key={`${"Germany"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Germany"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "high",
        mouth: "low",
        nose: "low",
        neck: "high",
      }}
      country="Greece"
      key={`${"Greece"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Greece"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "high",
        mouth: "low",
        nose: "low",
        neck: "high",
      }}
      country="Hungary"
      key={`${"Hungary"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Hungary"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "neutral",
        mouth: "high",
        nose: "low",
        neck: "high",
      }}
      country="Ireland"
      key={`${"Ireland"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Ireland"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "high",
        mouth: "neutral",
        nose: "high",
        neck: "low",
      }}
      country="Italy"
      key={`${"Italy"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Italy"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "neutral",
        mouth: "low",
        nose: "low",
        neck: "high",
      }}
      country="Latvia"
      key={`${"Latvia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Latvia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "high",
      }}
      country="Lithuania"
      key={`${"Lithuania"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Lithuania"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "low",
        mouth: "high",
        nose: "low",
        neck: "low",
      }}
      country="Luxembourg"
      key={`${"Luxembourg"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Luxembourg"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "high",
      }}
      country="Malta"
      key={`${"Malta"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Malta"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "low",
        mouth: "high",
        nose: "low",
        neck: "low",
      }}
      country="Netherlands"
      key={`${"Netherlands"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Netherlands"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "high",
      }}
      country="Poland"
      key={`${"Poland"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Poland"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "neutral",
        mouth: "low",
        nose: "low",
        neck: "low",
      }}
      country="Portugal"
      key={`${"Portugal"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Portugal"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "high",
        mouth: "neutral",
        nose: "low",
        neck: "low",
      }}
      country="Romania"
      key={`${"Romania"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Romania"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "high",
        mouth: "neutral",
        nose: "low",
        neck: "low",
      }}
      country="Slovakia"
      key={`${"Slovakia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Slovakia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "neutral",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "low",
        neck: "low",
      }}
      country="Slovenia"
      key={`${"Slovenia"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Slovenia"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "high",
        eyebrows: "neutral",
        mouth: "neutral",
        nose: "high",
        neck: "high",
      }}
      country="Spain"
      key={`${"Spain"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Spain"])}
      externalClass={"face"}
    />,
    <ChernoffFace
      chernoffAttributes={{
        body: "low",
        eyebrows: "low",
        mouth: "high",
        nose: "high",
        neck: "low",
      }}
      country="Sweden"
      key={`${"Sweden"}_${Math.random()}`}
      onClickFn={() => onChernoffFaceClick(dataset["Sweden"])}
      externalClass={"face"}
    />,
  ];

  return (
    <MapFrame>
      <Map />
      {!isModalVisible && faces}
      {isModalVisible && faces}
    </MapFrame>
  );
};

export default ChernoffMap;
