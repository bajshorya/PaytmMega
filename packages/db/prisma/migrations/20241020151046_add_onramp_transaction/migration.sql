/*
  Warnings:

  - Added the required column `amount` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "OnRampTransaction_token_key";

-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "provider" TEXT NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OnRampTransaction" ADD CONSTRAINT "OnRampTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
