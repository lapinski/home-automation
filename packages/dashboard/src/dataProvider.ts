import fakeRestProvider from 'ra-data-fakerest';
import { cacheDataProviderProxy } from 'react-admin';

import data from './data';

const dataProvider = fakeRestProvider(data, true);
export default cacheDataProviderProxy(dataProvider);