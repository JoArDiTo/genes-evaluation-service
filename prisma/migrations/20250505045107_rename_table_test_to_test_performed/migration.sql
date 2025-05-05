/*
  Warnings:

  - You are about to drop the column `test_id` on the `ANSWERS` table. All the data in the column will be lost.
  - You are about to drop the `TESTS` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `test_performed_id` to the `ANSWERS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ANSWERS" DROP CONSTRAINT "ANSWERS_test_id_fkey";

-- DropForeignKey
ALTER TABLE "TESTS" DROP CONSTRAINT "TESTS_classification_id_fkey";

-- DropForeignKey
ALTER TABLE "TESTS" DROP CONSTRAINT "TESTS_template_test_id_fkey";

-- AlterTable
ALTER TABLE "ANSWERS" DROP COLUMN "test_id",
ADD COLUMN     "test_performed_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "TESTS";

-- CreateTable
CREATE TABLE "TESTS_PERFORMED" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "classification_id" TEXT NOT NULL,
    "template_test_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TESTS_PERFORMED_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TESTS_PERFORMED" ADD CONSTRAINT "TESTS_PERFORMED_template_test_id_fkey" FOREIGN KEY ("template_test_id") REFERENCES "TEMPLATE_TESTS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TESTS_PERFORMED" ADD CONSTRAINT "TESTS_PERFORMED_classification_id_fkey" FOREIGN KEY ("classification_id") REFERENCES "CLASSIFICATIONS"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ANSWERS" ADD CONSTRAINT "ANSWERS_test_performed_id_fkey" FOREIGN KEY ("test_performed_id") REFERENCES "TESTS_PERFORMED"("id") ON DELETE CASCADE ON UPDATE CASCADE;
