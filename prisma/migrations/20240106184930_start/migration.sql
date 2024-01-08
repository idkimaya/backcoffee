-- CreateTable
CREATE TABLE `Users` (
    `userID` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coffees` (
    `coffeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `coffee_title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`coffeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCreatedCoffees` (
    `userCreatedCoffeeID` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `custom_coffee_title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `flavorID` INTEGER NOT NULL,
    `toppingID` INTEGER NOT NULL,
    `milkTypeID` INTEGER NOT NULL,

    PRIMARY KEY (`userCreatedCoffeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flavors` (
    `flavorID` INTEGER NOT NULL AUTO_INCREMENT,
    `flavor_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`flavorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Toppings` (
    `toppingID` INTEGER NOT NULL AUTO_INCREMENT,
    `topping_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`toppingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MilkTypes` (
    `milkTypeID` INTEGER NOT NULL AUTO_INCREMENT,
    `milk_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`milkTypeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Favorites` (
    `favoriteID` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `CoffeeID` INTEGER NOT NULL,
    `userCreatedCoffeeID` INTEGER NOT NULL,

    PRIMARY KEY (`favoriteID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orderID` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `coffeeID` INTEGER NOT NULL,
    `userCreatedCoffeeID` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `totalPrice` DOUBLE NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coffees` ADD CONSTRAINT `Coffees_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees` ADD CONSTRAINT `UserCreatedCoffees_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees` ADD CONSTRAINT `UserCreatedCoffees_flavorID_fkey` FOREIGN KEY (`flavorID`) REFERENCES `Flavors`(`flavorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees` ADD CONSTRAINT `UserCreatedCoffees_toppingID_fkey` FOREIGN KEY (`toppingID`) REFERENCES `Toppings`(`toppingID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserCreatedCoffees` ADD CONSTRAINT `UserCreatedCoffees_milkTypeID_fkey` FOREIGN KEY (`milkTypeID`) REFERENCES `MilkTypes`(`milkTypeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_CoffeeID_fkey` FOREIGN KEY (`CoffeeID`) REFERENCES `Coffees`(`coffeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_userCreatedCoffeeID_fkey` FOREIGN KEY (`userCreatedCoffeeID`) REFERENCES `UserCreatedCoffees`(`userCreatedCoffeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_coffeeID_fkey` FOREIGN KEY (`coffeeID`) REFERENCES `Coffees`(`coffeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_userCreatedCoffeeID_fkey` FOREIGN KEY (`userCreatedCoffeeID`) REFERENCES `UserCreatedCoffees`(`userCreatedCoffeeID`) ON DELETE RESTRICT ON UPDATE CASCADE;
