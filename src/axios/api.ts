import { get, post } from './index';
/**
 * api接口统一管理
 */
export const getEnterprise = (p: any) => get('?Action=home', p);
export const getCampusList = (p: any) => get('?Action=campusList', p);
export const login = (p: any) => post('/?Action=token', p);
export const getTutorList = (p: any) => get('?Action=tutorList', p);
export const getTutorType = (p: any) => get('?Action=tutorType', p);
export const getStudentList = (p: any) => get('?Action=studentList', p);
export const lessonSearch = (p: any) => get('?Action=lessonSearch', p);
export const getCoursewareList = (p: any) => get('?Action=coursewareList', p);
export const getLessonType = (p: any) => get('?Action=lessonType', p);
export const getLiveState = (p: any) => get('?Action=liveState', p);
export const addStudent = (p: any) => post('/?Action=addStudent', p);
export const addTutor = (p: any) => post('/?Action=addTutor', p);
export const getLessonTutorList = (p: any) =>
  get('/?Action=lessonTutorList', p);
export const getTutorNearData = (p: any) => get('/?Action=tutorNearData', p);
export const getLessonCoursewareList = (p: any) =>
  get('/?Action=lessonCoursewareList', p);
export const addLesson = (p: any) => post('/?Action=addLesson', p);
export const getCoursewareCoverList = (p: any) =>
  get('/?Action=coursewareCoverList', p);
export const getCompleteLessonList = (p: any) =>
  get('/?Action=completeLessonList', p);
export const getLessonStudentsList = (p: any) =>
  get('/?Action=lessonStudentsList', p);
export const lessonLinkSts = (p: any) => post('/?Action=lessonLinkSts', p);
export const getLessonStudents = (p: any) => get('/?Action=lessonStudents', p);
export const uniqueId = (p: any) => get('/?Action=uniqueId', p);
export const monitorLesson = (p: any) => get('?Action=monitorLesson', p);
export const monitorLessonUser = (p: any) =>
  get('?Action=monitorLessonUser', p);
export const getCampusListSlave = (p: any) => get('?Action=campusListSlave', p);
export const watchRecording = (p: any) => get('?Action=watchRecording', p);
export const viewLessonCourseware = (p: any) =>
  get('?Action=viewLessonCourseware', p);
export const getStudent = (p: any) => get('?Action=getStudent', p);
export const editStudent = (p: any) => post('?Action=editStudent', p);
export const getLessonDetail = (p: any) => get('?Action=getLessonDetail', p);
export const editLesson = (p: any) => post('?Action=editLesson', p);
export const uploadCourseware = (p: any) => post('?Action=uploadCourseware', p);
export const disableCourseware = (p: any) =>
  post('?Action=disableCourseware', p);
export const enableCourseware = (p: any) => post('?Action=enableCourseware', p);
export const getCampusSysUserList = (p: any) =>
  get('?Action=campusSysUserList', p);
export const enableSysUser = (p: any) => post('?Action=enableSysUser', p);
export const disableSysUser = (p: any) => post('?Action=disableSysUser', p);
export const resetPassword = (p: any) => post('?Action=resetPassword', p);
export const addSysUser = (p: any) => post('?Action=addSysUser', p);
export const changePasswd = (p: any) => post('?Action=changePasswd', p);
export const getLessonUserDevice = (p: any) =>
  get('?Action=getLessonUserDevice', p);
export const uploadStudentExcel = (p: any) =>
  post('?Action=uploadStudentExcel', p);
