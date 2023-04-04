import path from 'path';
import _REGISTRIES from './registries.json';

export const HOME = 'home';
export const AUTH = '_auth';
export const EMAIL = 'email';
export const REGISTRY = 'registry';
export const REPOSITORY = 'repository';
export const ALWAYS_AUTH = 'always-auth';
export const REGISTRY_ATTRS = [REGISTRY, HOME, AUTH, ALWAYS_AUTH];
// @ts-ignore
export const NRMRC = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
// @ts-ignore
export const NPMRC = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.npmrc');

export const REGISTRIES = _REGISTRIES;