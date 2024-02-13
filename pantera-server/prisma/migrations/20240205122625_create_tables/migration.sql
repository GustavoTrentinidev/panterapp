-- CreateTable
CREATE TABLE "militares" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "graduation" TEXT NOT NULL,

    CONSTRAINT "militares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "militar_material" (
    "id" SERIAL NOT NULL,
    "militarID" INTEGER NOT NULL,
    "materialID" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "militar_material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials" (
    "id" SERIAL NOT NULL,
    "total_quantity" INTEGER NOT NULL,
    "current_quantity" INTEGER NOT NULL,
    "squadID" INTEGER NOT NULL,

    CONSTRAINT "materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "squads" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "squads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "militar_material" ADD CONSTRAINT "militar_material_militarID_fkey" FOREIGN KEY ("militarID") REFERENCES "militares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "militar_material" ADD CONSTRAINT "militar_material_materialID_fkey" FOREIGN KEY ("materialID") REFERENCES "materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materials" ADD CONSTRAINT "materials_squadID_fkey" FOREIGN KEY ("squadID") REFERENCES "squads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
