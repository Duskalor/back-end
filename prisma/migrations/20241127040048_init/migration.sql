-- AlterTable
ALTER TABLE "User" ADD COLUMN     "description" TEXT,
ALTER COLUMN "followers" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "following" SET DEFAULT ARRAY[]::TEXT[];
