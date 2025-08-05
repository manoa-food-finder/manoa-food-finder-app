-- CreateTable
CREATE TABLE "VendorInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "hours" TEXT NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "VendorInfo_pkey" PRIMARY KEY ("id")
);
