import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ExerciseFollowThePathSelectScreen from "./screen/ExerciseFollowThePathSelectScreen";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<ExerciseFollowThePathSelectScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
