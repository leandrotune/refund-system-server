import { fastify } from "fastify";
import fastifyJwt from "fastify-jwt";

import { createUser } from "./routes/create-user";
import { login } from "./routes/login";
import { profile } from "./routes/profile";
import { createRefund } from "./routes/create-Refund";

const app = fastify();

app.register(createUser);
app.register(login);
app.register(profile);
app.register(createRefund);

app.register(fastifyJwt, {
	secret: "secret",
});

app
	.listen({
		port: 3333,
	})
	.then(() => console.log("server running on port: http://localhost:3333"));
