import React from "react";
import { useDispatch } from "react-redux";
import { createExperiment } from "../../actions/experiments";
import ExperimentCreationForm from "../../components/experiments/ExperimentCreationForm";

const ExperimentCreationContainer = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = (data) => {
    dispatch(createExperiment(data));
  };
  return (
    <>
      <ExperimentCreationForm onSubmit={handleOnSubmit} />
    </>
  );
};

export default ExperimentCreationContainer;
