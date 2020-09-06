/**
 *
 * NewPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectNewPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

export function NewPage() {
  useInjectReducer({ key: "newPage", reducer });
  useInjectSaga({ key: "newPage", saga });

  return (
    <div>
      <Helmet>
        <title>NewPage</title>
        <meta name="description" content="Description of NewPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

NewPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  newPage: makeSelectNewPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(NewPage);
