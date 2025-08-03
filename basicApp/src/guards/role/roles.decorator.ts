import { SetMetadata } from '@nestjs/common'; // set multiples vlaues inject inside decorator

// custom decorator

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
