-- CreateTable
CREATE TABLE `Launchpad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `poolAddress` VARCHAR(191) NOT NULL,
    `projectName` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(20) NOT NULL,
    `logo` VARCHAR(20) NOT NULL,
    `price` VARCHAR(10) NOT NULL,
    `goals` VARCHAR(10) NOT NULL,
    `allocation` VARCHAR(20) NOT NULL,
    `boostPoint` BIGINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
