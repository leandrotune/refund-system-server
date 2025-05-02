import type { FastifyInstance } from "fastify";
import z from "zod";
import { prisma } from "../lib/prisma";

export function createRefund(app: FastifyInstance) {
	const refundCategory = [
		"FOOD",
		"TRANSPOR",
		"HOSTING",
		"SERVICES",
		"OTHERS",
	] as const;

	const createRefundSchema = z.object({
		personName: z.string().min(1, "Nome da solicitação não preenchido!"),
		category: z.enum(refundCategory),
		amount: z.number().min(1, "informe o valor da solicitação!"),
		nameFile: z.string(),
	});

	app.post("/create-refund", async (req, res) => {
		const { personName, amount, category, nameFile } = createRefundSchema.parse(
			req.body,
		);

		const refund = await prisma.refund.create({
			data: {
				personName,
				category: category,
				amount,
				nameFile,
			},
		});

		return res.status(201).send(refund);
	});
}
