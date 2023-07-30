const { z } = require("zod");

exports.createProCatZod = z.object({
  body: z.object({
    title: z.string({
      required_error: "Zod: Title is required",
    }),
    imgUrl: z.string({
      required_error: "Zod: Image url is required",
    }),
  }),
});

exports.updateProCatZod = z.object({
  body: z.object({
    title: z.string().optional(),
    imgUrl: z.string().optional(),
  }),
});
