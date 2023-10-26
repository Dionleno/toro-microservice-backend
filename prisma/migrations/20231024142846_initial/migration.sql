-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checking_account" (
    "id" SERIAL NOT NULL,
    "account" SERIAL NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clients_id" INTEGER NOT NULL,

    CONSTRAINT "checking_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actives" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "checking_accountId" INTEGER NOT NULL,

    CONSTRAINT "actives_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_id_key" ON "clients"("id");

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "checking_account_id_key" ON "checking_account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "checking_account_account_key" ON "checking_account"("account");

-- CreateIndex
CREATE UNIQUE INDEX "status_id_key" ON "status"("id");

-- CreateIndex
CREATE UNIQUE INDEX "actives_id_key" ON "actives"("id");

-- AddForeignKey
ALTER TABLE "checking_account" ADD CONSTRAINT "checking_account_clients_id_fkey" FOREIGN KEY ("clients_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actives" ADD CONSTRAINT "actives_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actives" ADD CONSTRAINT "actives_checking_accountId_fkey" FOREIGN KEY ("checking_accountId") REFERENCES "checking_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
