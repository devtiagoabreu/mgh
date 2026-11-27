-- DropForeignKey
ALTER TABLE "demo_sessions" DROP CONSTRAINT "demo_sessions_login_id_fkey";

-- DropTable
DROP TABLE "demo_logins";

-- DropTable
DROP TABLE "demo_sessions";
