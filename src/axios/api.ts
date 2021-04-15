import { get, post } from './index';
/**
 * api接口统一管理
 */
// export const getEnterprise = (p: any) => get('?Action=home', p);
// export const login = (p: any) => post('/?Action=token', p);
export const login = (p: any) => get('/login', p);
