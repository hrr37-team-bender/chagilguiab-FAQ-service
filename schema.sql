DROP DATABASE IF EXISTS deepfryd_faq;

CREATE DATABASE deepfryd_faq;

USE deepfryd_faq;

CREATE TABLE stereos (
  id int NOT NULL AUTO_INCREMENT,
  deepfryd_id varchar(100),
  features varchar(100),
  question varchar(100),
  answer varchar(100),
  PRIMARY KEY (ID)
);