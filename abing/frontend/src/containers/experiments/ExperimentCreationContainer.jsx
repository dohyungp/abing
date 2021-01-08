import React from "react";
import { useDispatch } from "react-redux";
import { createExperiment } from "../../actions/experiments";
import ExperimentCreationForm from "../../components/experiments/ExperimentCreationForm";

const ExperimentCreationContainer = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = (data) => {
    const { scheduleRange: schedules, ...other } = data;
    const payload = {
      ...other,
      start_date: schedules[0],
      end_date: schedules[1],
    };
    dispatch(createExperiment(payload));
  };
  return (
    <>
      <ExperimentCreationForm onSubmit={handleOnSubmit} />
    </>
  );
};

export default ExperimentCreationContainer;
