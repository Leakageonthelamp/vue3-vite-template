import ApiService, { ApiServiceResponse } from './api.service';

interface IGetMockDataResp {
  id: number
  avatar: string
  email: string
  first_name: string;
  last_name: string;
}

export default class TestService {
  public static async getMockData(): Promise<ApiServiceResponse> {
    const res = await ApiService.get('/users?page=1');
    if (res.data) {
      res.data = res.data.data as IGetMockDataResp[];
    }

    return res;
  }
}
