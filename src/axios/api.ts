import { get, post } from './index';
export const getEnterprise = (p: any) => get('?Action=home', p); //机构信息
export const getCampusList = (p: any) => get('?Action=campusList', p);
