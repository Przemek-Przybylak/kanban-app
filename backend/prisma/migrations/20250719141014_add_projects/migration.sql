/*
  Warnings:

  - You are about to drop the column `project` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "project";

-- CreateTable
CREATE TABLE "projects" (
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "members" TEXT[],

    CONSTRAINT "projects_pkey" PRIMARY KEY ("projectId")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
