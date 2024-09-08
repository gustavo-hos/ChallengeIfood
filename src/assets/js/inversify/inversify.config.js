import { Container } from 'inversify';
import TYPES from './types';

import ToasterService from '../service/toaster';

const container = new Container();

container.bind(TYPES.ToasterService).to(ToasterService);

export default container;
