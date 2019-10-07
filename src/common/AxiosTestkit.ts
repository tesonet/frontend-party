import { AxiosResponse } from 'axios';

const mapArrayToAxiosObject = (array: Array<any>) =>
  array.reduce((obj, val, index) => {
    obj[index] = val;
    return obj;
  }, {});

const createMockAxiosResponse = ({
  data,
  config,
  headers,
  request,
  status,
  statusText,
}: Partial<AxiosResponse>): AxiosResponse => {
  return {
    data,
    config,
    headers,
    request,
    status: status || 200,
    statusText,
  };
};

export { mapArrayToAxiosObject, createMockAxiosResponse };
