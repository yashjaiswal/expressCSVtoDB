CREATE TABLE `users_steps` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `date` bigint(13) NOT NULL,
  `steps` int(11) NOT NULL,
  `calories` int(11) NOT NULL
);

ALTER TABLE `users_steps`
  ADD PRIMARY KEY (`id`);