const loginSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
};

export default loginSchema;
