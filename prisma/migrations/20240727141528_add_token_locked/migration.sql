-- CreateTable
CREATE TABLE `TokenLocked` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logo` VARCHAR(191) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `blockchain` INTEGER NOT NULL,
    `lockId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
