/*
  Warnings:

  - Changed the type of `location` on the `Conference` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
ALTER TYPE "EngamentType" ADD VALUE 'OTHER';

-- AlterTable
ALTER TABLE "Conference" ADD COLUMN     "description" TEXT,
ALTER COLUMN "dateEnd" DROP NOT NULL,
DROP COLUMN "location",
ADD COLUMN     "location" JSONB NOT NULL;
