-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "description" TEXT,
ALTER COLUMN "likes" SET DEFAULT ARRAY[]::TEXT[];
