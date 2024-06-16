-- CreateTable
CREATE TABLE "public"."t_code_error" (
    "id" SERIAL NOT NULL,
    "code_error" TEXT NOT NULL,
    "code_error_condition" TEXT NOT NULL,
    "code_error_description" TEXT NOT NULL,

    CONSTRAINT "t_code_error_pkey" PRIMARY KEY ("id")
);
