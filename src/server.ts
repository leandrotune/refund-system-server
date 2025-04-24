import { fastify } from "fastify";
import { createUser } from "./routes/create-user";

const app = fastify();

app.register(createUser);

app
	.listen({
		port: 3333,
	})
	.then(() => console.log("server running on port: http://localhost:3333"));
