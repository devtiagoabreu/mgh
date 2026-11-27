-- CreateEnum
CREATE TYPE "AppearancePreference" AS ENUM ('LIGHT', 'DARK');

-- AlterTable
ALTER TABLE "users" ADD COLUMN "appearance_preference" "AppearancePreference";
