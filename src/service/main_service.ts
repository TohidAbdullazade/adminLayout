import { AdminInterceptor } from "../config/admin_interceptor";

// GET ALL DATAS
export const GET = async () => {
  const res = await AdminInterceptor.get("");
  return res;
};

// POST  DATA
export const POST = async (value: any) => {
  const res = await AdminInterceptor.post("", value);
  return res;
};

// DELETE  DATA
export const DELETE = async (id: any) => {
  const res = await AdminInterceptor.delete(`/${id}`);
  return res;
};

// PUT  DATA
export const PUT = async (id: any, value: any) => {
  const res = await AdminInterceptor.put(`/${id}`, value);
  return res;
};
