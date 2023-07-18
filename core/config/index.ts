import rawConfig from './config.json';
import { Config } from '@/core';

// @ts-ignore
export const config: Config = rawConfig[process.env.ANTELOPEJS_LAUNCH_ENV || 'production'];
