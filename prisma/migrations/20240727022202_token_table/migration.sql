-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `supply` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `blockchain` INTEGER NOT NULL,
    `web` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `telegram` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
