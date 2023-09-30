"use client";
import styles from "./Modal.module.css";
import { useAppContext } from "@/app/contexts/appContext";
import ChernoffFace from "../ChernoffFace/ChernoffFace";
import { useEffect } from "react";

const Modal = ({ externalClasses }) => {
  const { countryCard, toggleModalVisibility, isModalVisible } =
    useAppContext();

  let countryAttributes = {
    body: countryCard.body,
    eyebrows: countryCard.eyebrows,
    mouth: countryCard.mouth,
    nose: countryCard.nose,
    neck: countryCard.neck,
  };

  useEffect(() => {
    countryAttributes = {
      body: countryCard.body,
      eyebrows: countryCard.eyebrows,
      mouth: countryCard.mouth,
      nose: countryCard.nose,
      neck: countryCard.neck,
    };
  }, [countryCard, isModalVisible]);

  return (
    <div className={`${styles.modalContent} ${styles[externalClasses]}`}>
      <div
        className={styles.closeButton}
        onClick={() => {
          toggleModalVisibility();
        }}
      >
        CLOSE
      </div>
      <div className={styles.modalChernoffFaceContainer}>
        <ChernoffFace
          chernoffAttributes={countryAttributes}
          country="modalChernoffFace"
          insideOfMap={false}
        />
      </div>
      <div className={styles.modal_countryName}>
        <p>{`${countryCard.countryFlag} ${countryCard.countryName} ${countryCard.countryFlag}`}</p>
      </div>
      <div className={styles.modal_generalDescriptions}>
        <p className={styles.modal_countryEyebrowsDescription}>
          {countryCard.eyebrows === "high" && <b>Tense Eyebrows</b>}
          {countryCard.eyebrows === "neutral" && <b>Regular Eyebrows</b>}
          {countryCard.eyebrows === "low" && <b>Relaxed Eyebrows</b>} indicate a
          {countryCard.eyebrows === "high" && " high "}
          {countryCard.eyebrows === "neutral" && " moderate "}
          {countryCard.eyebrows === "low" && " low "}
          level of perceived corruption.
        </p>
        <p className={styles.modal_countryNoseDescription}>
          {countryCard.nose === "high" && <b>Larger Nose</b>}
          {countryCard.nose === "low" && <b>Smaller Nose</b>} indicate a
          {countryCard.nose === "high" && " moderate to high "}
          {countryCard.nose === "low" && " low to moderate "}
          index of cocaine-related deaths per 100K habitants.
        </p>
        <p className={styles.modal_countryMouthDescription}>
          {countryCard.mouth === "high" && <b>Happy Smile</b>}
          {countryCard.mouth === "neutral" && <b>Regular Smile</b>}
          {countryCard.mouth === "low" && <b>Sad Smile</b>} indicate a
          {countryCard.mouth === "high" && " high "}
          {countryCard.mouth === "neutral" && " moderate "}
          {countryCard.mouth === "low" && " low "}
          happiness index.
        </p>
        <p className={styles.modal_countryNeckDescription}>
          {countryCard.neck === "high" && <b>Prominent Neck</b>}
          {countryCard.neck === "low" && <b>Absent Neck</b>} indicate a
          {countryCard.neck === "high" && " moderate to high "}
          {countryCard.neck === "low" && " low to moderate "}
          obesity index among the population.
        </p>
        <p className={styles.modal_countrySkinDescription}>
          {countryCard.body === "high" && <b>Darker Skin Tone</b>}
          {countryCard.body === "neutral" && <b>Moderate Skin Tone</b>}
          {countryCard.body === "low" && <b>Lighter Skin Tone</b>} indicate a
          {countryCard.body === "high" && " high "}
          {countryCard.body === "neutral" && " moderate "}
          {countryCard.body === "low" && " low "}
          level of UV Exposure.
        </p>
      </div>
    </div>
  );
};

export default Modal;
