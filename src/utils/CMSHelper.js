import Butter from 'buttercms';

import { butterCMSId } from '../config/keys';

const butter = Butter(butterCMSId);

const getCMSSimpleValues = async (...values) => {
  const valueArr = [];
  values.forEach(value => valueArr.push(value));
  const response = await butter.content.retrieve(valueArr);
  return response.data.data;
};

export { getCMSSimpleValues };
