import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddVendorPostSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  hours: Yup.string().required('Hours are required'),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required'),
  owner: Yup.string().required(),
});
