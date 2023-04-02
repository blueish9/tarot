import { readers } from '../data/readers';

export type Reader = (typeof readers)[number];
