/*
  Warnings:

  - You are about to drop the `Hates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hates" DROP CONSTRAINT "Hates_postId_fkey";

-- DropTable
DROP TABLE "Hates";

-- DropTable
DROP TABLE "Likes";
