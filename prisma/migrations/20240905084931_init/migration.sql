-- CreateTable
CREATE TABLE "TraderDetail" (
    "id" SERIAL NOT NULL,
    "version" INTEGER NOT NULL,
    "eori" VARCHAR(17) NOT NULL,
    "active" BOOLEAN NOT NULL,
    "ukimAuth" VARCHAR(32),
    "nirmsAuth" VARCHAR(13),
    "niphlAuth" VARCHAR(8),
    "actorId" VARCHAR(17),
    "srcSystemName" VARCHAR(10),
    "clientId" UUID,
    "correlationId" UUID,
    "msgOriginatedDatetime" TIMESTAMP(6),
    "createdDatetime" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDatetime" TIMESTAMP(6) NOT NULL,
    "inactiveDatetime" TIMESTAMP(6),

    CONSTRAINT "TraderDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TraderDetail_eori_key" ON "TraderDetail"("eori");
