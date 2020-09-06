/**
 *
 * Asynchronously loads the component for NewPage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
