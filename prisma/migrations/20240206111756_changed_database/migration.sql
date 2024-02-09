/*
  Warnings:

  - The primary key for the `Coffees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `coffeeID` on the `Coffees` table. All the data in the column will be lost.
  - You are about to drop the column `coffeeID` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `userCreatedCoffeeID` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the `Favorites` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `coffeesID` to the `Coffees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Coffees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Coffees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `UserCreatedCoffees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_CoffeeID_fkey`;

-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_userCreatedCoffeeID_fkey`;

-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_userID_fkey`;

-- DropForeignKey
ALTER TABLE `Orders` DROP FOREIGN KEY `Orders_coffeeID_fkey`;

-- DropForeignKey
ALTER TABLE `Orders` DROP FOREIGN KEY `Orders_userCreatedCoffeeID_fkey`;

-- AlterTable
ALTER TABLE `Coffees` DROP PRIMARY KEY,
    DROP COLUMN `coffeeID`,
    ADD COLUMN `coffeesID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD PRIMARY KEY (`coffeesID`);

-- AlterTable
ALTER TABLE `Orders` DROP COLUMN `coffeeID`,
    DROP COLUMN `userCreatedCoffeeID`;

-- AlterTable
ALTER TABLE `UserCreatedCoffees` ADD COLUMN `price` DOUBLE NOT NULL;

-- DropTable
DROP TABLE `Favorites`;

-- CreateTable
CREATE TABLE `Coffee_Order` (
    `coffee_orderID` INTEGER NOT NULL AUTO_INCREMENT,
    `coffeesID` INTEGER NOT NULL,
    `orderID` INTEGER NOT NULL,

    PRIMARY KEY (`coffee_orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCreatedCoffees_Order` (
    `userCreatedCoffee_orderID` INTEGER NOT NULL AUTO_INCREMENT,
    `userCreatedCoffeeID` INTEGER NOT NULL,
    `orderID` INTEGER NOT NULL,

    PRIMARY KEY (`userCreatedCoffee_orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coffee_Order` ADD CONSTRAINT `Coffee_Order_coffeesID_fkey` FOREIGN KEY (`coffeesID`) REFERENCES `Coffees`(`coffeesID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Coffee_Order` ADD CONSTRAINT `Coffee_Order_orderID_fkey` FOREIGN KEY (`orderID`) REFERENCES `Orders`(`orderID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees_Order` ADD CONSTRAINT `UserCreatedCoffees_Order_userCreatedCoffeeID_fkey` FOREIGN KEY (`userCreatedCoffeeID`) REFERENCES `UserCreatedCoffees`(`userCreatedCoffeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees_Order` ADD CONSTRAINT `UserCreatedCoffees_Order_orderID_fkey` FOREIGN KEY (`orderID`) REFERENCES `Orders`(`orderID`) ON DELETE RESTRICT ON UPDATE CASCADE;
