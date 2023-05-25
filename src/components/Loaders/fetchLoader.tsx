import React, { Dispatch, SetStateAction, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

type fetchLoaderProps = {
  isLoading: boolean;
  setIsloading: Dispatch<SetStateAction<boolean>>;
};

function FetchLoader({ isLoading, setIsloading }: fetchLoaderProps) {
  return (
    <Spinner
      //visibility of Overlay Loading Spinner
      visible={isLoading}
      //Text with the Spinner
      textContent={"Loading..."}
      //Text style of the Spinner Text
      //   textStyle={styles.spinnerTextStyle}
    />
  );
}

export default FetchLoader;
