/*
  Warnings:

  - Changed the type of `category` on the `refunds` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RefundCategory" AS ENUM ('FOOD', 'HOSTING', 'TRANSPOR', 'SERVICES', 'OTHERS');

-- AlterTable
ALTER TABLE "refunds" DROP COLUMN "category",
ADD COLUMN     "category" "RefundCategory" NOT NULL;
