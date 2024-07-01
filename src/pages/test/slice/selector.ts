

import { createSelector } from "@reduxjs/toolkit";
import { initialState, name } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedDomain = (state: any) => state[name] || initialState;

export const testSelector = createSelector(
    [selectedDomain],
    (state) => state
);