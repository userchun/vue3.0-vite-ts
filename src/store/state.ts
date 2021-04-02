const token = localStorage.getItem('token') || '';
export interface State {
  token: String;
  nikcname: String;
  isCampus: Boolean;
  isOrigPwd: Boolean;
}
const state: State = {
  token,
  isCampus: false,
  isOrigPwd: false,
  nikcname: '',
};
export default state;
