import api from "./api";

export const getHome = async () => {
  const { data } = await api.get("/home");
  return data?.data || {};
};

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials-home");
  return data?.data || {};
};
