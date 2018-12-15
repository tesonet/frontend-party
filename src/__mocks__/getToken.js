import { MOCK_TOKEN } from "./constants";

jest.mock("../api/api");
import { getToken } from "../api/api";

getToken.mockImplementation(
  () => new Promise(resolve => resolve({ token: MOCK_TOKEN }))
);
