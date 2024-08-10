-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "supply" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "blockchain" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "web" TEXT,
    "twitter" TEXT,
    "telegram" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TokenLocked" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "blockchain" INTEGER NOT NULL,
    "totalAmount" TEXT NOT NULL DEFAULT '0',
    "symbol" TEXT NOT NULL DEFAULT 'NULL',

    CONSTRAINT "TokenLocked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Launchpad" (
    "id" SERIAL NOT NULL,
    "poolAddress" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "allocation" TEXT NOT NULL,
    "boostPoint" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "Launchpad_pkey" PRIMARY KEY ("id")
);
