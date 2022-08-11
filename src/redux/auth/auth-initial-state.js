import { STATUS } from '../../constants/status';

export const authInitialState = {
  status: STATUS.Idle,
  access_token: '',
  token_type: '',
};
