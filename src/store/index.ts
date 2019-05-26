import { createStore, createTypedHooks } from "easy-peasy";

import model, { StoreModel } from "./models";

const { useActions, useDispatch, useStore } = createTypedHooks<StoreModel>();

const store = createStore(model);

export { store, useActions, useDispatch, useStore };
