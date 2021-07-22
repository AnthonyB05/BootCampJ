-- Adminer 4.8.0 MySQL 5.5.5-10.4.17-MariaDB dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `pokemons`;
CREATE TABLE `pokemons` (
  `id_pok` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nom_pok` varchar(10) NOT NULL,
  `appartenir` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_pok`),
  UNIQUE KEY `id_pok` (`id_pok`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `pokemons` (`id_pok`, `nom_pok`, `appartenir`) VALUES
(1,	'Bulbizarre',	0),
(2,	'Herbizarre',	0),
(3,	'Florizarre',	0),
(4,	'Salameche',	0),
(5,	'Reptincel',	0),
(6,	'Dracaufeu',	0),
(7,	'Carapuce',	0),
(8,	'Carabaffe',	0),
(9,	'Tortank',	0),
(10,	'Chenipan',	0),
(11,	'Chrysacier',	0),
(12,	'Papilusion',	0),
(13,	'Aspicot',	0),
(14,	'Coconfort',	0),
(15,	'Dardargnan',	0),
(16,	'Roucool',	0),
(17,	'Roucoups',	0),
(18,	'Roucarnage',	0),
(19,	'Rattata',	0),
(20,	'Rattatac',	0),
(21,	'Piafabec',	0),
(22,	'Rapasdepic',	0),
(23,	'Abo',	0),
(24,	'Arbok',	0),
(25,	'Pikachu',	0),
(26,	'Raichu',	0),
(27,	'Sabelette',	0),
(28,	'Sablaireau',	0),
(29,	'NidoranF',	0),
(30,	'Nidorina',	0),
(31,	'Nidoqueen',	0),
(32,	'NidoranM',	0),
(33,	'Nidorino',	0),
(34,	'Nidoking',	0),
(35,	'Melofee',	0),
(36,	'Melodelfe',	0),
(37,	'Goupix',	0),
(38,	'Feunard',	0),
(39,	'Rondoudou',	0),
(40,	'Grodoudou',	0),
(41,	'Nosferapti',	0),
(42,	'Nosferalto',	0),
(43,	'Mystherbe',	0),
(44,	'Ortide',	0),
(45,	'Rafflesia',	0),
(46,	'Paras',	0),
(47,	'Parasect',	0),
(48,	'Mimitoss',	0),
(49,	'Aeromite',	0),
(50,	'Taupiqueur',	0),
(51,	'Triopikeur',	0),
(52,	'Miaouss',	0),
(53,	'Persian',	0),
(54,	'Psykokwak',	0),
(55,	'Akwakwak',	0),
(56,	'Ferosinge',	0),
(57,	'Colossinge',	0),
(58,	'Caninos',	0),
(59,	'Arcanin',	0),
(60,	'Ptitard',	0),
(61,	'Tetarte',	0),
(62,	'Tartard',	0),
(63,	'Abra',	0),
(64,	'Kadabra',	0),
(65,	'Alakazam',	0),
(66,	'Machoc',	0),
(67,	'Machopeur',	0),
(68,	'Mackogneur',	0),
(69,	'Chetiflor',	0),
(70,	'Boustiflor',	0),
(71,	'Empiflor',	0),
(72,	'Tentacool',	0),
(73,	'Tentacruel',	0),
(74,	'Racaillou',	0),
(75,	'Gravalanch',	0),
(76,	'Grolem',	0),
(77,	'Ponyta',	0),
(78,	'Galopa',	0),
(79,	'Ramoloss',	0),
(80,	'Flagadoss',	0),
(81,	'Magneti',	0),
(82,	'Magneton',	0),
(83,	'Canarticho',	0),
(84,	'Doduo',	0),
(85,	'Dodrio',	0),
(86,	'Otaria',	0),
(87,	'Lamantine',	0),
(88,	'Tadmorv',	0),
(89,	'Grotadmorv',	0),
(90,	'Kokiyas',	0),
(91,	'Crustabri',	0),
(92,	'Fantominus',	0),
(93,	'Spectrum',	0),
(94,	'Ectoplasma',	0),
(95,	'Onix',	0),
(96,	'Soporifik',	0),
(97,	'Hypnomade',	0),
(98,	'Krabby',	0),
(99,	'Krabboss',	0),
(100,	'Voltorbe',	0),
(101,	'Electrode',	0),
(102,	'Noeunoeuf',	0),
(103,	'Noadkoko',	0),
(104,	'Osselait',	0),
(105,	'Ossatueur',	0),
(106,	'Kicklee',	0),
(107,	'Tygnon',	0),
(108,	'Excelangue',	0),
(109,	'Smogo',	0),
(110,	'Smogogo',	0),
(111,	'Rhinocorne',	0),
(112,	'Rhinoferos',	0),
(113,	'Leveinard',	0),
(114,	'Saquedeneu',	0),
(115,	'Kangourex',	0),
(116,	'Hypotrempe',	0),
(117,	'Hypocean',	0),
(118,	'Poissirene',	0),
(119,	'Poissoroy',	0),
(120,	'Stari',	0),
(121,	'Staross',	0),
(122,	'M. Mime',	0),
(123,	'Insecateur',	0),
(124,	'Lippoutou',	0),
(125,	'Elektek',	0),
(126,	'Magmar',	0),
(127,	'Scarabrute',	0),
(128,	'Tauros',	0),
(129,	'Magicarpe',	0),
(130,	'Leviator',	0),
(131,	'Lokhlass',	0),
(132,	'Metamorph',	0),
(133,	'Evoli',	0),
(134,	'Aquali',	0),
(135,	'Voltali',	0),
(136,	'Pyroli',	0),
(137,	'Porygon',	0),
(138,	'Amonita',	0),
(139,	'Amonistar',	0),
(140,	'Kabuto',	0),
(141,	'Kabutops',	0),
(142,	'Ptera',	0),
(143,	'Ronflex',	0),
(144,	'Artikodin',	0),
(145,	'Electhor',	0),
(146,	'Sulfura',	0),
(147,	'Minidraco',	0),
(148,	'Draco',	0),
(149,	'Dracolosse',	0),
(150,	'Mewtwo',	0),
(151,	'Mew',	0);

-- 2021-07-22 08:34:25
