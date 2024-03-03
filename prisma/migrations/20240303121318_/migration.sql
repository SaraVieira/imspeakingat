/*
  Warnings:

  - You are about to drop the column `links` on the `Conference` table. All the data in the column will be lost.
  - You are about to drop the `Engament` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Conference` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Conference` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GigType" AS ENUM ('TALK', 'MC', 'PANEL', 'OTHER');

-- DropForeignKey
ALTER TABLE "Engament" DROP CONSTRAINT "Engament_conferenceId_fkey";

-- DropForeignKey
ALTER TABLE "Engament" DROP CONSTRAINT "Engament_createdById_fkey";

-- AlterTable
ALTER TABLE "Conference" DROP COLUMN "links",
ADD COLUMN     "github" TEXT,
ADD COLUMN     "mastodon" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "threads" TEXT,
ADD COLUMN     "x" TEXT;

-- DropTable
DROP TABLE "Engament";

-- DropEnum
DROP TYPE "EngamentType";

-- CreateTable
CREATE TABLE "Gig" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "GigType" NOT NULL,
    "talk" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "conferenceId" TEXT,

    CONSTRAINT "Gig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Conference_slug_key" ON "Conference"("slug");

-- AddForeignKey
ALTER TABLE "Gig" ADD CONSTRAINT "Gig_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gig" ADD CONSTRAINT "Gig_conferenceId_fkey" FOREIGN KEY ("conferenceId") REFERENCES "Conference"("id") ON DELETE SET NULL ON UPDATE CASCADE;
