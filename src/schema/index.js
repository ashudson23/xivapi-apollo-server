import { mergeSchemas } from 'graphql-tools';

import character from './character';
import freeCompany from './freeCompany';

export default mergeSchemas({
  schemas: [
    character,
    freeCompany,
  ],
});
