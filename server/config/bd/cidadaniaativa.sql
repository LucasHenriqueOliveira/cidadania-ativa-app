-- MySQL Script generated by MySQL Workbench
-- Wed Jul 29 19:12:00 2015
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema cidadaniaativa
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cidadaniaativa
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cidadaniaativa` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `cidadaniaativa` ;

-- -----------------------------------------------------
-- Table `cidadaniaativa`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `email` VARCHAR(100) NULL,
  `picture` VARCHAR(255) NULL,
  `nickname` VARCHAR(100) NULL,
  `type` TINYINT NULL COMMENT '1 - face\n2 - google+\n3 - twitter',
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `deletedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`status` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`occurrence_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`occurrence_type` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`occurrence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`occurrence` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NULL,
  `user_id` INT NOT NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `picture` VARCHAR(45) NULL,
  `status_id` INT NOT NULL,
  `occurrence_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ocorrencia_usuario_idx` (`user_id` ASC),
  INDEX `fk_ocorrencia_status1_idx` (`status_id` ASC),
  INDEX `fk_ocorrencia_tipo_problema1_idx` (`occurrence_type_id` ASC),
  CONSTRAINT `fk_ocorrencia_usuario`
    FOREIGN KEY (`user_id`)
    REFERENCES `cidadaniaativa`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ocorrencia_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `cidadaniaativa`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ocorrencia_tipo_problema1`
    FOREIGN KEY (`occurrence_type_id`)
    REFERENCES `cidadaniaativa`.`occurrence_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`comment` (
  `id` INT NOT NULL,
  `occurrence_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `comment` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comentario_ocorrencia1_idx` (`occurrence_id` ASC),
  INDEX `fk_comentario_usuario1_idx` (`user_id` ASC),
  CONSTRAINT `fk_comentario_ocorrencia1`
    FOREIGN KEY (`occurrence_id`)
    REFERENCES `cidadaniaativa`.`occurrence` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario1`
    FOREIGN KEY (`user_id`)
    REFERENCES `cidadaniaativa`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`comment_signature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`comment_signature` (
  `id` INT NOT NULL,
  `comment_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_assinatura_comentario1_idx` (`comment_id` ASC),
  INDEX `fk_assinatura_comentario_usuario1_idx` (`user_id` ASC),
  CONSTRAINT `fk_assinatura_comentario1`
    FOREIGN KEY (`comment_id`)
    REFERENCES `cidadaniaativa`.`comment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assinatura_comentario_usuario1`
    FOREIGN KEY (`user_id`)
    REFERENCES `cidadaniaativa`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cidadaniaativa`.`occurrence_signature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cidadaniaativa`.`occurrence_signature` (
  `id` INT NOT NULL,
  `occurrence_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_assinatura_ocorrencia_ocorrencia1_idx` (`occurrence_id` ASC),
  INDEX `fk_assinatura_ocorrencia_usuario1_idx` (`user_id` ASC),
  CONSTRAINT `fk_assinatura_ocorrencia_ocorrencia1`
    FOREIGN KEY (`occurrence_id`)
    REFERENCES `cidadaniaativa`.`occurrence` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_assinatura_ocorrencia_usuario1`
    FOREIGN KEY (`user_id`)
    REFERENCES `cidadaniaativa`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;