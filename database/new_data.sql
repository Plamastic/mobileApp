INSERT INTO `branch` (`idBranch`, `nameBranch`, `value`) VALUES (1, 'branch1', 1);
INSERT INTO `branch` (`idBranch`, `nameBranch`, `value`) VALUES (2, 'branch2', 2);
INSERT INTO `branch` (`idBranch`, `nameBranch`, `value`) VALUES (3, 'branch3', 3);
INSERT INTO `branch` (`idBranch`, `nameBranch`, `value`) VALUES (4, 'branch4', 4);
INSERT INTO `branch` (`idBranch`, `nameBranch`, `value`) VALUES (5, 'branch5', 5);

INSERT INTO `class` (`idBranch`, `nameClass`, `value`) VALUES (1, 'class1', 1);
INSERT INTO `class` (`idBranch`, `nameClass`, `value`) VALUES (2, 'class2', 2);
INSERT INTO `class` (`idBranch`, `nameClass`, `value`) VALUES (3, 'class3', 3);
INSERT INTO `class` (`idBranch`, `nameClass`, `value`) VALUES (4, 'class4', 4);
INSERT INTO `class` (`idBranch`, `nameClass`, `value`) VALUES (5, 'class5', 5);

INSERT INTO `class` (`idLecturer`, `lecturer`, `idUser`) VALUES (1, 'class1', 1);
INSERT INTO `class` (`idLecturer`, `lecturer`, `idUser`) VALUES (2, 'class2', 2);
INSERT INTO `class` (`idLecturer`, `lecturer`, `idUser`) VALUES (3, 'class3', 3);
INSERT INTO `class` (`idLecturer`, `lecturer`, `idUser`) VALUES (4, 'class4', 4);
INSERT INTO `class` (`idLecturer`, `lecturer`, `idUser`) VALUES (5, 'class5', 5);

INSERT INTO `student` (`nameClass`, `idStudent`, `nameStudent`, `point`, `work`) VALUES (class1, '1', 'student1', 10, 'work1');
INSERT INTO `student` (`nameClass`, `idStudent`, `nameStudent`, `point`, `work`) VALUES (class2, '2', 'student2', 10, 'work2');
INSERT INTO `student` (`nameClass`, `idStudent`, `nameStudent`, `point`, `work`) VALUES (class3, '3', 'student3', 10, 'work3');
INSERT INTO `student` (`nameClass`, `idStudent`, `nameStudent`, `point`, `work`) VALUES (class4, '4', 'student4', 10, 'work4');
INSERT INTO `student` (`nameClass`, `idStudent`, `nameStudent`, `point`, `work`) VALUES (class5, '5', 'student5', 10, 'work5');


INSERT INTO `user` (`idUser``, `userName`, `passWord`) VALUES ('1', 'user1', '123456');
INSERT INTO `user` (`idUser``, `userName`, `passWord`) VALUES ('2', 'user2', '123456');
INSERT INTO `user` (`idUser``, `userName`, `passWord`) VALUES ('3', 'user3', '123456');
INSERT INTO `user` (`idUser``, `userName`, `passWord`) VALUES ('4', 'user4', '123456');
INSERT INTO `user` (`idUser``, `userName`, `passWord`) VALUES ('5', 'user5', '123456');

INSERT INTO `work` (`idLecturer`, `title`, `status`, `Lecturer`, `date`, `description`) VALUES (1, 'title1', 'status1', 'lecturer1', '2023-06-07', 'desc1');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `Lecturer`, `date`, `description`) VALUES (2, 'title2', 'status2', 'lecturer2', '2023-06-07', 'desc2');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `Lecturer`, `date`, `description`) VALUES (3, 'title3', 'status3', 'lecturer3', '2023-06-07', 'desc3');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `Lecturer`, `date`, `description`) VALUES (4, 'title4', 'status4', 'lecturer4', '2023-06-07', 'desc4');
INSERT INTO `work` (`idLecturer`, `title`, `status`, `Lecturer`, `date`, `description`) VALUES (5, 'title5', 'status5', 'lecturer5', '2023-06-07', 'desc5');
