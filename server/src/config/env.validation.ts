import * as Joi from 'joi';

export const envSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
    PORT: Joi.number().default(3001),
    DATABASE_URL: Joi.string().uri().required(),
    CLIENT_ORIGIN: Joi.string().uri().default('http://localhost:5173'),
});