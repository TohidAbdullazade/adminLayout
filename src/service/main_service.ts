import { AdminInterceptor } from "../config/admin_interceptor";

// GET ALL DATAS
export const GET = async (url: string) => {
  const res = await AdminInterceptor.get(url);
  return res;
};

// POST  DATA
export const POST = async (url: string, value: any) => {
  const res = await AdminInterceptor.post(url, value);
  return res;
};

// DELETE  DATA
export const DELETE = async (url: string, id?: string) => {
  const res = await AdminInterceptor.delete(`${url}/${id}`);
  return res;
};
export const deleteWithOutId = async (url: string) => {
  const res = await AdminInterceptor.delete(url);
  return res;
};

// PUT  DATA
export const PUT = async (url: string, id: string, value: any) => {
  const res = await AdminInterceptor.put(`${url}/${id}`, value);
  return res;
};

// PUT WITOUT ID
export const putWithOutId = async (url: string, values: any) => {
  const res = await AdminInterceptor.put(url, values);
  return res;
};
