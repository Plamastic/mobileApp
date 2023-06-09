INSERT INTO `branch` (`nameBranch`) VALUES ('branch1');
INSERT INTO `branch` (`nameBranch`) VALUES ('branch2');
INSERT INTO `branch` (`nameBranch`) VALUES ('branch3');

INSERT INTO `class` (`nameClass`) VALUES ('class1');
INSERT INTO `class` (`nameClass`) VALUES ('class2');
INSERT INTO `class` (`nameClass`) VALUES ('class3');

INSERT INTO `lecturer` (`lecturer`, `idUser`) VALUES ('lecture1', 1);
INSERT INTO `lecturer` (`lecturer`, `idUser`) VALUES ('lecture2', 2);
INSERT INTO `lecturer` (`lecturer`, `idUser`) VALUES ('lecture3', 3);

INSERT INTO `student` (`idClass`, `nameStudent`, `point`, `work`) VALUES (1, 'student1', 10, 'ok');
INSERT INTO `student` (`idClass`, `nameStudent`, `point`, `work`) VALUES (2, 'student2', 10, 'ok');
INSERT INTO `student` (`idClass`, `nameStudent`, `point`, `work`) VALUES (3, 'student3', 10, 'ok');

INSERT INTO `user` (`userName`, `passWord`) VALUES ('user1', '123456');
INSERT INTO `user` (`userName`, `passWord`) VALUES ('user2', '123456');
INSERT INTO `user` (`userName`, `passWord`) VALUES ('user3', '123456');

INSERT INTO `work` (`idLecturer`, `title`, `status`, `date`, `description`) VALUES (1, 'title1', 'status1', '2023-06-07', 'desc1');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `date`, `description`) VALUES (2, 'title2', 'status2', '2023-06-07', 'desc2');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `date`, `description`) VALUES (3, 'title3', 'status3', '2023-06-07', 'desc3');
