import type { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../lib/prisma";

export function createRefund(app: FastifyInstance) {
	const createRefundSchema = z.object({
		personName: z.string().min(1, "Nome da solicitação não preenchido!"),
		category: z.string().min(1, "selecione uma Categoria"),
		amount: z.number().min(1, "informe o valor da solicitação!"),
		nameFile: z.string(),
	});

	app.post("/create-refund", async (req, res) => {
		const { personName, category, amount, nameFile } = createRefundSchema.parse(
			req.body,
		);

		const refund = await prisma.refund.create({
			data: {
				personName,
				category: "FOOD",
				amount,
				nameFile,
			},
		});

		return res.status(201).send(refund);
	});
}
