import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
	return "server running";
});

app
	.listen({
		port: 3333,
	})
	.then(() => console.log("server running on port: http://localhost:3333"));
