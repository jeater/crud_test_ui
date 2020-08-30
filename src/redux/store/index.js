import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";
import { createLogger } from "redux-logger";
import todoApp from "./reducers";
import rootSaga from "../sagas";

const logger = createLogger({
  collapsed: true,
  timestamp: true,
  duration: true,
});

const sagaMiddleware = reduxSaga();

export default () => {
  return {
    ...createStore(todoApp, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
