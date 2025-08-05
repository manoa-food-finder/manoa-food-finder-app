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

export const AddVendorInfoSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  location: Yup.string().required('Location is required'),
  startTime: Yup.string()
    .required('Start time is required')
    .matches(/^\d{1,2}:\d{2}$/, 'Start time must be in HH:mm format'),
  endTime: Yup.string()
    .required('End time is required')
    .matches(/^\d{1,2}:\d{2}$/, 'End time must be in HH:mm format')
    .test('is-after-start', 'End time must be after start time', function (value) {
      const { startTime } = this.parent;
      if (!startTime || !value) return true;
      const [sh, sm] = startTime.split(':').map(Number);
      const [eh, em] = value.split(':').map(Number);
      return eh > sh || (eh === sh && em > sm);
    }),
  owner: Yup.string().required(),  // If you want to keep owner validation here
});