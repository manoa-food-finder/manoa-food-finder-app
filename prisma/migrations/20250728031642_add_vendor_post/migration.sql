-- CreateTable
CREATE TABLE "VendorPost" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "VendorPost_pkey" PRIMARY KEY ("id")
);
