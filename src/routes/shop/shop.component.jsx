import React from "react";
import { Routes, Route } from 'react-router-dom';
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";

export const Shop = () => {

  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};
