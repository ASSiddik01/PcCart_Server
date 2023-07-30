const { z } = require("zod");

exports.updateProductZod = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional().array().optional(),
    quantity: z.number().optional(),
    color: z.string().optional().array().optional(),
    brand: z.string().optional(),
    status: z.string().optional(),
  }),
});

exports.ratingZod = z.object({
  body: z.object({
    star: z.number({
      required_error: "Zod: Rating star is required",
    }),
    productId: z.string({
      required_error: "Zod: Product is is required",
    }),
  }),
});
