import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the newPage state domain
 */

const selectNewPageDomain = state => state.newPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewPage
 */

const makeSelectNewPage = () =>
  createSelector(
    selectNewPageDomain,
    substate => substate
  );

export default makeSelectNewPage;
export { selectNewPageDomain };
