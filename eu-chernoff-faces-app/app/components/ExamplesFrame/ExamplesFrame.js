"use client";
import styles from "./ExamplesFrame.module.css";
import { useAppContext } from "@/app/contexts/appContext";
import { useState, useEffect } from "react";

const ExamplesFrame = ({
  children,
  numberOfExamples,
  faces,
  legend,
  facesLabel0,
  facesLabel1,
  facesLabel2,
}) => {
  const { isModalVisible } = useAppContext();
  const columnClass =
    numberOfExamples === 3 ? "wrapperWith3Columns" : "wrapperWith2Columns";
  if (numberOfExamples === 3) {
    return (
      <>
        <div className={`${styles.wrapper} ${styles[columnClass]}`}>
          {!isModalVisible && faces[0]}
          {!isModalVisible && faces[1]}
          {!isModalVisible && faces[2]}
          {isModalVisible && faces[0]}
          {isModalVisible && faces[1]}
          {isModalVisible && faces[2]}
          <p>{facesLabel0}</p>
          <p>{facesLabel1}</p>
          <p>{facesLabel2}</p>
        </div>
        <p className={styles.frameDescription}>{legend}</p>
      </>
    );
  } else {
    return (
      <>
        <div className={`${styles.wrapper} ${styles[columnClass]}`}>
          {!isModalVisible && faces[0]}
          {!isModalVisible && faces[1]}
          {isModalVisible && faces[0]}
          {isModalVisible && faces[1]}
          <p>{facesLabel0}</p>
          <p>{facesLabel1}</p>
        </div>
        <p className={styles.frameDescription}>{legend}</p>
      </>
    );
  }
};

export default ExamplesFrame;
