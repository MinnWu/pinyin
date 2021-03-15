var array, allList, pylist, shengmuList, jqx, spy, resultArr, flag, arr, num, i = 0, pyArr = [];
array = {
	//单韵母声调
	'a': ['ā', 'á', 'ǎ', 'à'],
	'o': ['ō', 'ó', 'ǒ', 'ò'],
	'e': ['ē', 'é', 'ě', 'è'],
	'i': ['ī', 'í', 'ǐ', 'ì'],
	'u': ['ū', 'ú', 'ǔ', 'ù'],
	'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'],
	//复韵母声调
	'ai': ['āi', 'ái', 'ǎi', 'ài'],
	'ei': ['ēi', 'éi', 'ěi', 'èi'],
	'ui': ['uī', 'uí', 'uǐ', 'uì'],
	'ao': ['āo', 'áo', 'ǎo', 'ào'],
	'ou': ['ōu', 'óu', 'ǒu', 'òu'],
	'iu': ['iū', 'iú', 'iǔ', 'iù'],
	'ie': ['iē', 'ié', 'iě', 'iè'],
	'üe': ['üē', 'üé', 'üě', 'üè'],
	'er': ['ēr', 'ér', 'ěr', 'èr'],
	//鼻韵母声调
	'an': ['ān', 'án', 'ǎn', 'àn'],
	'en': ['ēn', 'én', 'ěn', 'èn'],
	'in': ['īn', 'ín', 'ǐn', 'ìn'],
	'un': ['ūn', 'ún', 'ǔn', 'ùn'],
	'ün': ['ǖn', 'ǘn', 'ǚn', 'ǜn'],
	'ang': ['āng', 'áng', 'ǎng', 'àng'],
	'eng': ['ēng', 'éng', 'ěng', 'èng'],
	'ing': ['īng', 'íng', 'ǐng', 'ìng'],
	'ong': ['ōng', 'óng', 'ǒng', 'òng'],
	//整体认读音节
	'zhi': ['zhī', 'zhí', 'zhǐ', 'zhì'],
	'chi': ['chī', 'chí', 'chǐ', 'chì'],
	'shi': ['shī', 'shí', 'shǐ', 'shì'],
	'ri': ['rī', 'rí', 'rǐ', 'rì'],
	'zi': ['zī', 'zí', 'zǐ', 'zì'],
	'ci': ['cī', 'cí', 'cǐ', 'cì'],
	'si': ['sī', 'sí', 'sǐ', 'sì'],
	'yi': ['yī', 'yí', 'yǐ', 'yì'],
	'wu': ['wū', 'wú', 'wǔ', 'wù'],
	'yu': ['yū', 'yú ', 'yǔ', 'yù'],
	'ye': ['yē', 'yé', 'yě', 'yè'],
	'yue': ['yuē', 'yué', 'yuě', 'yuè'],
	'yuan': ['yuān', 'yuán', 'yuǎn', 'yuàn'],
	'yin': ['yīn', 'yín', 'yǐn', 'yìn'],
	'yun': ['yūn', 'yún', 'yǔn', 'yùn'],
	'ying': ['yīng', 'yíng', 'yǐng', 'yìng'],
	//声母
	// 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z'
	// 'c', 's', 'y', 'w'
	b: {
		'ba': ['bā', 'bá', 'bǎ', 'bà'],
		'bai': ['bāi', 'bái', 'bǎi', 'bài'],
		'ban': ['bān', 'null', 'bǎn', 'bàn'],
		'bang': ['bāng', 'null', 'bǎng', 'bàng'],
		'bao': ['bāo', 'báo', 'bǎo', 'bào'],
		'bei': ['bēi', 'null', 'běi', 'bèi'],
		'ben': ['bēn', 'null', 'běn', 'bèn'],
		'beng': ['bēng', 'béng', 'běng', 'bèng'],
		'bi': ['bī', 'bí', 'bǐ', 'bì'],
		'bian': ['biān', 'null', 'biǎn', 'biàn'],
		'biao': ['biāo', 'biáo', 'biǎo', 'biào'],
		'bie': ['biē', 'bié', 'biě', 'biè'],
		'bin': ['bīn', 'null', 'null', 'bìn'],
		'bing': ['bīng', 'null', 'bǐng', 'bìng'],
		'bo': ['bō', 'bó', 'bǒ', 'bò'],
		'bu': ['bū', 'bú', 'bǔ', 'bù']
	},

	p: {
		'pa': ['pā', 'pá', 'null', 'pà'],
		'pai': ['pāi', 'pái', 'pǎi', 'pài'],
		'pan': ['pān', 'pán', 'pǎn', 'pàn'],
		'pang': ['pāng', 'páng', 'pǎng', 'pàng'],
		'pao': ['pāo', 'páo', 'pǎo', 'pào'],
		'pei': ['pēi', 'péi', 'pěi', 'pèi'],
		'pen': ['pēn', 'pén', 'pěn', 'pèn'],
		'peng': ['pēng', 'péng', 'pěng', 'pèng'],
		'pi': ['pī', 'pí', 'pǐ', 'pì'],
		'pian': ['piān', 'pián', 'piǎn', 'piàn'],
		'piao': ['piāo', 'piáo', 'piǎo', 'piào'],
		'pie': ['piē', 'null', 'piě', 'piè'],
		'pin': ['pīn', 'pín', 'pǐn', 'pìn'],
		'ping': ['pīng', 'píng', 'pǐng', 'null'],
		'po': ['pō', 'pó', 'pǒ', 'pò'],
		'pou': ['pōu', 'póu', 'pǒu', 'null'],
		'pu': ['pū', 'pú', 'pǔ', 'pù']
	},
	m: {
		'ma': ['mā', 'má', 'mǎ', 'mà'],
		'mai': ['null', 'mái', 'mǎi', 'mài'],
		'man': ['mān', 'mán', 'mǎn', 'màn'],
		'mang': ['māng', 'máng', 'mǎng', 'null'],
		'mao': ['māo', 'máo', 'mǎo', 'mào'],
		'me': ['null', 'null', 'null', 'null'],
		'mei': ['null', 'méi', 'měi', 'mèi'],
		'men': ['mēn', 'mén', 'null', 'mèn'],
		'meng': ['mēng', 'méng', 'měng', 'mèng'],
		'mi': ['mī', 'mí', 'mǐ', 'mì'],
		'mian': ['null', 'mián', 'miǎn', 'miàn'],
		'miao': ['miāo', 'miáo', 'miǎo', 'miào'],
		'mie': ['miē', 'null', 'null', 'miè'],
		'min': ['null', 'mín', 'mǐn', 'null'],
		'ming': ['null', 'míng', 'mǐng', 'mìng'],
		'miu': ['null', 'null', 'null', 'miù'],
		'mo': ['mō', 'mó', 'mǒ', 'mò'],
		'mou': ['mōu', 'móu', 'mǒu', 'null'],
		'mu': ['null', 'mú', 'mǔ', 'mù']
	},
	f: {
		'fa': ['fā', 'fá', 'fǎ', 'fà'],
		'fan': ['fān', 'fán', 'fǎn', 'fàn'],
		'fang': ['fāng', 'fáng', 'fǎng', 'fàng'],
		'fei': ['fēi', 'féi', 'fěi', 'fèi'],
		'fen': ['fēn', 'fén', 'fěn', 'fèn'],
		'feng': ['fēng', 'féng', 'fěng', 'fèng'],
		'fo': ['null', 'fó', 'null', 'null'],
		'fou': ['null', 'fóu', 'fǒu', 'null'],
		'fu': ['fū', 'fú', 'fǔ', 'fù']
	},
	d: {
		'da': ['dā', 'dá', 'dǎ', 'dà'],
		'dai': ['dāi', 'null', 'dǎi', 'dài'],
		'dan': ['dān', 'null', 'dǎn', 'dàn'],
		'dang': ['dāng', 'null', 'dǎng', 'dàng'],
		'dao': ['dāo', 'null', 'dǎo', 'dào'],
		'de': ['dē', 'dé', 'null', 'null'],
		'den': ['null', 'null', 'null', 'dèn'],
		'dei': ['dēi', 'null', 'děi', 'null'],
		'deng': ['dēng', 'null', 'děng', 'dèng'],
		'di': ['dī', 'dí', 'dǐ', 'dì'],
		'dia': ['diǎ'],
		'dian': ['diān', 'null', 'diǎn', 'diàn'],
		'diao': ['diāo', 'null', 'diǎo', 'diào'],
		'die': ['diē', 'dié', 'null', 'diè'],
		'ding': ['dīng', 'null', 'dǐng', 'dìng'],
		'diu': ['diū', 'null', 'null', 'null'],
		'dong': ['dōng', 'null', 'dǒng', 'dòng'],
		'dou': ['dōu', 'dóu', 'dǒu', 'dòu'],
		'du': ['dū', 'dú', 'dǔ', 'dù'],
		'duan': ['duān', 'null', 'duǎn', 'duàn'],
		'dui': ['duī', 'null', 'duǐ', 'duì'],
		'dun': ['dūn', 'null', 'dǔn', 'dùn'],
		'duo': ['duō', 'duó', 'duǒ', 'duò']
	},
	t: {
		'ta': ['tā', 'null', 'tǎ', 'tà'],
		'tai': ['tāi', 'tái', 'tǎi', 'tài'],
		'tan': ['tān', 'tán', 'tǎn', 'tàn'],
		'tang': ['tāng', 'táng', 'tǎng', 'tàng'],
		'tao': ['tāo', 'táo', 'tǎo', 'tào'],
		'te': ['null', 'null', 'null', 'tè'],
		'teng': ['tēng', 'téng', 'null', 'tèng'],
		'ti': ['tī', 'tí', 'tǐ', 'tì'],
		'tian': ['tiān', 'tián', 'tiǎn', 'tiàn'],
		'tiao': ['tiāo', 'tiáo', 'tiǎo', 'tiào'],
		'tie': ['tiē', 'null', 'tiě', 'tiè'],
		'ting': ['tīng', 'tíng', 'tǐng', 'tìng'],
		'tong': ['tōng', 'tóng', 'tǒng', 'tòng'],
		'tou': ['tōu', 'tóu', 'tǒu', 'tòu'],
		'tu': ['tū', 'tú', 'tǔ', 'tù'],
		'tuan': ['tuān', 'tuán', 'tuǎn', 'tuàn'],
		'tui': ['tuī', 'tuí', 'tuǐ', 'tuì'],
		'tun': ['tūn', 'tún', 'tǔn', 'tùn'],
		'tuo': ['tuō', 'tuó', 'tuǒ', 'tuò']
	},
	n: {
		'na': ['nā', 'ná', 'nǎ', 'nà'],
		'nai': ['null', 'nái', 'nǎi', 'nài'],
		'nan': ['nān', 'nán', 'nǎn', 'nàn'],
		'nang': ['nāng', 'náng', 'nǎng', 'nàng'],
		'nao': ['nāo', 'náo', 'nǎo', 'nào'],
		'ne': ['null', 'né', 'null', 'nè'],
		'nei': ['null', 'null', 'něi', 'nèi'],
		'nen': ['null', 'null', 'null', 'nèn'],
		'neng': ['null', 'néng', 'null', 'null'],
		'ni': ['nī', 'ní', 'nǐ', 'nì'],
		'nian': ['niān', 'nián', 'niǎn', 'niàn'],
		'niang': ['null', 'niáng', 'null', 'niàng'],
		'niao': ['null', 'null', 'niǎo', 'niào'],
		'nie': ['niē', 'nié', 'null', 'niè'],
		'nin': ['null', 'nín', 'nǐn', 'null'],
		'ning': ['null', 'níng', 'nǐng', 'nìng'],
		'niu': ['niū', 'niú', 'niǔ', 'niù'],
		'nong': ['null', 'nóng', 'nǒng', 'nòng'],
		'nou': ['null', 'nóu', 'null', 'nòu'],
		'nu': ['null', 'nú', 'nǔ', 'nù'],
		'nü': ['null', 'null', 'nǚ', 'nǜ'],
		'nuan': ['null', 'nuán', 'nuǎn', 'null'],
		'nüe': ['null', 'null', 'null', 'nüè'],
		'nuo': ['null', 'nuó', 'null', 'nuò'],
		'nun': ['null', 'nún', 'null', 'null']
	},
	l: {
		'la': ['lā', 'null', 'lǎ', 'là'],
		'lai': ['lāi', 'lái', 'lǎi', 'lài'],
		'lan': ['null', 'lán', 'lǎn', 'làn'],
		'lang': ['lāng', 'láng', 'lǎng', 'làng'],
		'lao': ['lāo', 'láo', 'lǎo', 'lào'],
		'le': ['lē', 'null', 'null', 'lè'],
		'lei': ['lēi', 'léi', 'lěi', 'lèi'],
		'leng': ['lēng', 'léng', 'lěng', 'lèng'],
		'li': ['lī', 'lí', 'lǐ', 'lì'],
		'lia': ['null', 'null', 'liǎ', 'null'],
		'lian': ['null', 'lián', 'liǎn', 'liàn'],
		'liang': ['null', 'liáng', 'liǎng', 'liàng'],
		'liao': ['liāo', 'liáo', 'liǎo', 'liào'],
		'lie': ['null', 'null', 'liě', 'liè'],
		'lin': ['līn', 'lín', 'lǐn', 'lìn'],
		'ling': ['null', 'líng', 'lǐng', 'lìng'],
		'liu': ['liū', 'liú', 'liǔ', 'liù'],
		'long': ['null', 'lóng', 'lǒng', 'lòng'],
		'lou': ['lōu', 'lóu', 'lǒu', 'lòu'],
		'lu': ['lū', 'lú', 'lǔ', 'lù'],
		'lü': ['null', 'lǘ', 'lǚ', 'lǜ'],
		'luan': ['null', 'luán', 'luǎn', 'luàn'],
		'lue': ['null', 'null', 'null', 'luè'],
		'lüe': ['null', 'null', 'null', 'lüè'],
		'lun': ['lūn', 'lún', 'lǔn', 'lùn'],
		'luo': ['luō', 'luó', 'luǒ', 'luò']
	},
	g: {
		'ga': ['gā', 'gá', 'gǎ', 'gà'],
		'gai': ['gāi', 'null', 'gǎi', 'gài'],
		'gan': ['gān', 'null', 'gǎn', 'gàn'],
		'gang': ['gāng', 'null', 'gǎng', 'gàng'],
		'gao': ['gāo', 'null', 'gǎo', 'gào'],
		'ge': ['gē', 'gé', 'gě', 'gè'],
		'gei': ['null', 'null', 'gěi', 'null'],
		'gen': ['gēn', 'gén', 'gěn', 'gèn'],
		'geng': ['gēng', 'null', 'gěng', 'gèng'],
		'gong': ['gōng', 'null', 'gǒng', 'gòng'],
		'gou': ['gōu', 'null', 'gǒu', 'gòu'],
		'gu': ['gū', 'gú', 'gǔ', 'gù'],
		'gua': ['guā', 'null', 'guǎ', 'guà'],
		'guai': ['guāi', 'guái', 'guǎi', 'guài'],
		'guan': ['guān', 'null', 'guǎn', 'guàn'],
		'guang': ['guāng', 'null', 'guǎng', 'guàng'],
		'gui': ['guī', 'null', 'guǐ', 'guì'],
		'gun': ['null', 'null', 'gǔn', 'gùn'],
		'guo': ['guō', 'guó', 'guǒ', 'guò']
	},
	k: {
		'ka': ['kā', 'null', 'kǎ', 'null'],
		'kai': ['kāi', 'null', 'kǎi', 'kài'],
		'kan': ['kān', 'null', 'kǎn', 'kàn'],
		'kang': ['kāng', 'káng', 'null', 'kàng'],
		'kao': ['kāo', 'null', 'kǎo', 'kào'],
		'ke': ['kē', 'ké', 'kě', 'kè'],
		'ken': ['null', 'null', 'kěn', 'kèn'],
		'keng': ['kēng', 'null', 'null', 'null'],
		'kong': ['kōng', 'null', 'kǒng', 'kòng'],
		'kou': ['kōu', 'null', 'kǒu', 'kòu'],
		'ku': ['kū', 'null', 'kǔ', 'kù'],
		'kua': ['kuā', 'null', 'kuǎ', 'kuà'],
		'kuai': ['null', 'null', 'kuǎi', 'kuài'],
		'kuan': ['kuān', 'null', 'kuǎn', 'null'],
		'kuang': ['kuāng', 'kuáng', 'kuǎng', 'kuàng'],
		'kui': ['kuī', 'kuí', 'kuǐ', 'kuì'],
		'kun': ['kūn', 'null', 'kǔn', 'kùn'],
		'kuo': ['null', 'null', 'null', 'kuò']
	},
	h: {
		'ha': ['hā', 'há', 'null', 'hà'],
		'hai': ['hāi', 'hái', 'hǎi', 'hài'],
		'han': ['hān', 'hán', 'hǎn', 'hàn'],
		'hang': ['hāng', 'háng', 'null', 'hàng'],
		'hao': ['hāo', 'háo', 'hǎo', 'hào'],
		'he': ['hē', 'hé', 'null', 'hè'],
		'hei': ['hēi', 'null', 'null', 'null'],
		'hen': ['null', 'hén', 'hěn', 'hèn'],
		'heng': ['hēng', 'héng', 'hěng', 'hèng'],
		'hong': ['hōng', 'hóng', 'hǒng', 'hòng'],
		'hou': ['hōu', 'hóu', 'hǒu', 'hòu'],
		'hu': ['hū', 'hú', 'hǔ', 'hù'],
		'hua': ['huā', 'huá', 'null', 'huà'],
		'huai': ['null', 'huái', 'null', 'huài'],
		'huan': ['huān', 'huán', 'huǎn', 'huàn'],
		'huang': ['huāng', 'huáng', 'huǎng', 'huàng'],
		'hui': ['huī', 'huí', 'huǐ', 'huì'],
		'hun': ['hūn', 'hún', 'hǔn', 'hùn'],
		'huo': ['huō', 'huó', 'huǒ', 'huò']
	},
	j: {
		'ji': ['jī', 'jí', 'jǐ', 'jì'],
		'jia': ['jiā', 'jiá', 'jiǎ', 'jià'],
		'jian': ['jiān', 'jián', 'jiǎn', 'jiàn'],
		'jiang': ['jiāng', 'null', 'jiǎng', 'jiàng'],
		'jiao': ['jiāo', 'jiáo', 'jiǎo', 'jiào'],
		'jie': ['jiē', 'jié', 'jiě', 'jiè'],
		'jin': ['jīn', 'null', 'jǐn', 'jìn'],
		'jing': ['jīng', 'null', 'jǐng', 'jìng'],
		'jiong': ['jiōng', 'null', 'jiǒng', 'null'],
		'jiu': ['jiū', 'null', 'jiǔ', 'jiù'],
		'ju': ['jū', 'jú', 'jǔ', 'jù'],
		'juan': ['juān', 'null', 'juǎn', 'juàn'],
		'jue': ['juē', 'jué', 'null', 'juè'],
		'jun': ['jūn', 'null', 'null', 'jùn']
	},
	q: {
		'qi': ['qī', 'qí', 'qǐ', 'qì'],
		'qia': ['qiā', 'qiá', 'qiǎ', 'qià'],
		'qian': ['qiān', 'qián', 'qiǎn', 'qiàn'],
		'qiang': ['qiāng', 'qiáng', 'qiǎng', 'qiàng'],
		'qiao': ['qiāo', 'qiáo', 'qiǎo', 'qiào'],
		'qie': ['qiē', 'qié', 'qiě', 'qiè'],
		'qin': ['qīn', 'qín', 'qǐn', 'qìn'],
		'qing': ['qīng', 'qíng', 'qǐng', 'qìng'],
		'qiong': ['qiōng', 'qióng', 'null', 'null'],
		'qiu': ['qiū', 'qiú', 'qiǔ', 'null'],
		'qu': ['qū', 'qú', 'qǔ', 'qù'],
		'quan': ['quān', 'quán', 'quǎn', 'quàn'],
		'que': ['quē', 'qué', 'null', 'què'],
		'qun': ['qūn', 'qún', 'null', 'null']
	},
	x: {
		'xi': ['xī', 'xí', 'xǐ', 'xì'],
		'xia': ['xiā', 'xiá', 'xiǎ', 'xià'],
		'xian': ['xiān', 'xián', 'xiǎn', 'xiàn'],
		'xiang': ['xiāng', 'xiáng', 'xiǎng', 'xiàng'],
		'xiao': ['xiāo', 'xiáo', 'xiǎo', 'xiào'],
		'xie': ['xiē', 'xié', 'xiě', 'xiè'],
		'xin': ['xīn', 'xín', 'xǐn', 'xìn'],
		'xing': ['xīng', 'xíng', 'xǐng', 'xìng'],
		'xiong': ['xiōng', 'xióng', 'xiǒng', 'xiòng'],
		'xiu': ['xiū', 'xiú', 'xiǔ', 'xiù'],
		'xu': ['xū', 'xú', 'xǔ', 'xù'],
		'xuan': ['xuān', 'xuán', 'xuǎn', 'xuàn'],
		'xue': ['xuē', 'xué', 'xuě', 'xuè'],
		'xun': ['xūn', 'null', 'xǔn', 'xùn']
	},
	zh: {
		'zha': ['zhā', 'zhá', 'zhǎ', 'zhà'],
		'zhai': ['zhāi', 'zhái', 'zhǎi', 'zhài'],
		'zhan': ['zhān', 'zhán', 'zhǎn', 'zhàn'],
		'zhang': ['zhāng', 'null', 'zhǎng', 'zhàng'],
		'zhao': ['zhāo', 'zháo', 'zhǎo', 'zhào'],
		'zhe': ['zhē', 'zhé', 'zhě', 'zhè'],
		'zhei': ['null', 'null', 'null', 'zhèi'],
		'zhen': ['zhēn', 'null', 'zhěn', 'zhèn'],
		'zheng': ['zhēng', 'null', 'zhěng', 'zhèng'],
		'zhi': ['zhī', 'zhí', 'zhǐ', 'zhì'],
		'zhong': ['zhōng', 'null', 'zhǒng', 'zhòng'],
		'zhou': ['zhōu', 'zhóu', 'zhǒu', 'zhòu'],
		'zhu': ['zhū', 'zhú', 'zhǔ', 'zhù'],
		'zhua': ['zhuā', 'null', 'zhuǎ', 'null'],
		'zhuai': ['zhuāi', 'zhuái', 'zhuǎi', 'zhuài'],
		'zhuan': ['zhuān', 'null', 'zhuǎn', 'zhuàn'],
		'zhuang': ['zhuāng', 'null', 'zhuǎng', 'zhuàng'],
		'zhui': ['zhuī', 'null', 'zhuǐ', 'zhuì'],
		'zhun': ['zhūn', 'null', 'zhǔn', 'zhùn'],
		'zhuo': ['zhuō', 'zhuó', 'null', 'null']
	},
	ch: {
		'cha': ['chā', 'chá', 'chǎ', 'chà'],
		'chai': ['chāi', 'chái', 'chǎi', 'chài'],
		'chan': ['chān', 'chán', 'chǎn', 'chàn'],
		'chang': ['chāng', 'cháng', 'chǎng', 'chàng'],
		'chao': ['chāo', 'cháo', 'chǎo', 'chào'],
		'che': ['chē', 'null', 'chě', 'chè'],
		'chen': ['chēn', 'chén', 'chěn', 'chèn'],
		'cheng': ['chēng', 'chéng', 'chěng', 'chèng'],
		'chi': ['chī', 'chí', 'chǐ', 'chì'],
		'chong': ['chōng', 'chóng', 'chǒng', 'chòng'],
		'chou': ['chōu', 'chóu', 'chǒu', 'chòu'],
		'chu': ['chū', 'chú', 'chǔ', 'chù'],
		'chua': ['chuā', 'null', 'null', 'null'],
		'chuai': ['chuāi', 'chuái', 'chuǎi', 'chuài'],
		'chuan': ['chuān', 'chuán', 'chuǎn', 'chuàn'],
		'chuang': ['chuāng', 'chuáng', 'chuǎng', 'chuàng'],
		'chui': ['chuī', 'chuí', 'null', 'null'],
		'chun': ['chūn', 'chún', 'chǔn', 'null'],
		'chuo': ['chuō', 'null', 'null', 'chuò']
	},
	sh: {
		'sha': ['shā', 'shá', 'shǎ', 'shà'],
		'shai': ['shāi', 'null', 'shǎi', 'shài'],
		'shan': ['shān', 'null', 'shǎn', 'shàn'],
		'shang': ['shāng', 'null', 'shǎng', 'shàng'],
		'shao': ['shāo', 'sháo', 'shǎo', 'shào'],
		'she': ['shē', 'shé', 'shě', 'shè'],
		'shei': ['null', 'shéi', 'null', 'null'],
		'shen': ['shēn', 'shén', 'shěn', 'shèn'],
		'sheng': ['shēng', 'shéng', 'shěng', 'shèng'],
		'shi': ['shī', 'shí', 'shǐ', 'shì'],
		'shou': ['shōu', 'shóu', 'shǒu', 'shòu'],
		'shu': ['shū', 'shú', 'shǔ', 'shù'],
		'shua': ['shuā', 'null', 'shuǎ', 'shuà'],
		'shuai': ['shuāi', 'null', 'shuǎi', 'shuài'],
		'shuan': ['shuān', 'null', 'null', 'shuàn'],
		'shuang': ['shuāng', 'null', 'shuǎng', 'shuàng'],
		'shui': ['null', 'shuí', 'shuǐ', 'shuì'],
		'shun': ['shūn', 'null', 'shǔn', 'shùn'],
		'shuo': ['shuō', 'null', 'null', 'shuò']
	},
	r: {
		'ran': ['null', 'rán', 'rǎn', 'null'],
		'rang': ['rāng', 'ráng', 'rǎng', 'ràng'],
		'rao': ['null', 'ráo', 'rǎo', 'rào'],
		're': ['null', 'null', 'rě', 'rè'],
		'ren': ['null', 'rén', 'rěn', 'rèn'],
		'reng': ['rēng', 'réng', 'null', 'rèng'],
		'ri': ['null', 'null', 'null', 'rì'],
		'rong': ['null', 'róng', 'rǒng', 'null'],
		'rou': ['null', 'róu', 'rǒu', 'ròu'],
		'ru': ['null', 'rú', 'rǔ', 'rù'],
		'ruan': ['null', 'ruán', 'ruǎn', 'null'],
		'rui': ['null', 'ruí', 'ruǐ', 'ruì'],
		'run': ['null', 'null', 'null', 'rùn'],
		'ruo': ['null', 'ruó', 'null', 'ruò']
	},
	z: {
		'za': ['zā', 'zá', 'zǎ', 'null'],
		'zai': ['zāi', 'null', 'zǎi', 'zài'],
		'zan': ['zān', 'zán', 'zǎn', 'zàn'],
		'zang': ['zāng', 'null', 'zǎng', 'zàng'],
		'zao': ['zāo', 'záo', 'zǎo', 'zào'],
		'ze': ['null', 'zé', 'null', 'zè'],
		'zei': ['null', 'zéi', 'null', 'null'],
		'zen': ['null', 'null', 'zěn', 'zèn'],
		'zeng': ['zēng', 'null', 'null', 'zèng'],
		'zi': ['zī', 'zí', 'zǐ', 'zì'],
		'zong': ['zōng', 'null', 'zǒng', 'zòng'],
		'zou': ['zōu', 'null', 'zǒu', 'zòu'],
		'zu': ['zū', 'zú', 'zǔ', 'null'],
		'zuan': ['zuān', 'null', 'zuǎn', 'zuàn'],
		'zui': ['zuī', 'null', 'zuǐ', 'zuì'],
		'zun': ['zūn', 'null', 'zǔn', 'zùn'],
		'zuo': ['zuō', 'zuó', 'zuǒ', 'zuò']
	},
	c: {
		'ca': ['cā', 'null', 'cǎ', 'cà'],
		'cai': ['cāi', 'cái', 'cǎi', 'cài'],
		'can': ['cān', 'cán', 'cǎn', 'càn'],
		'cang': ['cāng', 'cáng', 'null', 'càng'],
		'cao': ['cāo', 'cáo', 'cǎo', 'cào'],
		'ce': ['null', 'null', 'null', 'cè'],
		'cen': ['cēn', 'cén', 'null', 'null'],
		'ceng': ['cēng', 'céng', 'null', 'cèng'],
		'ci': ['cī', 'cí', 'cǐ', 'cì'],
		'cong': ['cōng', 'cóng', 'null', 'còng'],
		'cou': ['null', 'null', 'null', 'còu'],
		'cu': ['cū', 'cú', 'null', 'cù'],
		'cuan': ['cuān', 'cuán', 'null', 'cuàn'],
		'cui': ['cuī', 'null', 'cuǐ', 'cuì'],
		'cun': ['cūn', 'cún', 'cǔn', 'cùn'],
		'cuo': ['cuō', 'cuó', 'cuǒ', 'cuò']
	},
	s: {
		'sa': ['sā', 'null', 'sǎ', 'sà'],
		'sai': ['sāi', 'null', 'null', 'sài'],
		'san': ['sān', 'null', 'sǎn', 'sàn'],
		'sang': ['sāng', 'null', 'sǎng', 'sàng'],
		'sao': ['sāo', 'null', 'sǎo', 'sào'],
		'se': ['sē', 'null', 'null', 'sè'],
		'sen': ['sēn', 'null', 'null', 'null'],
		'seng': ['sēng', 'null', 'null', 'null'],
		'si': ['sī', 'null', 'sǐ', 'sì'],
		'song': ['sōng', 'null', 'sǒng', 'sòng'],
		'sou': ['sōu', 'null', 'sǒu', 'sòu'],
		'su': ['sū', 'sú', 'null', 'sù'],
		'suan': ['suān', 'null', 'suǎn', 'suàn'],
		'sui': ['suī', 'suí', 'suǐ', 'suì'],
		'sun': ['sūn', 'null', 'sǔn', 'sùn'],
		'suo': ['suō', 'null', 'suǒ', 'suò']
	},
	y: {
		'ya': ['yā', 'yá', 'yǎ', 'yà'],
		'yan': ['yān', 'yán', 'yǎn', 'yàn'],
		'yang': ['yāng', 'yáng', 'yǎng', 'yàng'],
		'yao': ['yāo', 'yáo', 'yǎo', 'yào'],
		'ye': ['yē', 'yé', 'yě', 'yè'],
		'yi': ['yī', 'yí', 'yǐ', 'yì'],
		'yin': ['yīn', 'yín', 'yǐn', 'yìn'],
		'ying': ['yīng', 'yíng', 'yǐng', 'yìng'],
		'yo': ['yō', 'null', 'null', 'null'],
		'yong': ['yōng', 'yóng', 'yǒng', 'yòng'],
		'you': ['yōu', 'yóu', 'yǒu', 'yòu'],
		'yu': ['yū', 'yú', 'yǔ', 'yù'],
		'yuan': ['yuān', 'yuán', 'yuǎn', 'yuàn'],
		'yue': ['yuē', 'null', 'yuě', 'yuè'],
		'yun': ['yūn', 'yún', 'yǔn', 'yùn']
	},
	w: {
		'wa': ['wā', 'wá', 'wǎ', 'wà'],
		'wai': ['wāi', 'null', 'wǎi', 'wài'],
		'wan': ['wān', 'wán', 'wǎn', 'wàn'],
		'wang': ['wāng', 'wáng', 'wǎng', 'wàng'],
		'wei': ['wēi', 'wéi', 'wěi', 'wèi'],
		'wen': ['wēn', 'wén', 'wěn', 'wèn'],
		'weng': ['wēng', 'null', 'wěng', 'wèng'],
		'wo': ['wō', 'null', 'wǒ', 'wò'],
		'wu': ['wū', 'wú', 'wǔ', 'wù']
	}
};

allList = [
	//韵母
	'a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er',
	'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong',
	//整体认读音节
	'zhi', 'chi', 'shi',
	'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying',
	//声母
	'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z',
	'c', 's', 'y', 'w',
	//b
	'ba', 'bai', 'ban', 'bang', 'bao', 'bei', 'ben', 'beng', 'bi', 'bian', 'biao', 'bie', 'bin', 'bing', 'bo', 'bu',
	//p
	'pa', 'pai', 'pan', 'pang', 'pao', 'pei', 'pen', 'peng', 'pi', 'pian', 'piao', 'pie', 'pin', 'ping', 'po',
	'pou', 'pu',
	//m
	'ma', 'mai', 'man', 'mang', 'mao', 'me', 'mei', 'men', 'meng', 'mi', 'mian', 'miao', 'mie', 'min', 'ming',
	'miu', 'mo', 'mou', 'mu',
	//f
	'fa', 'fan', 'fang', 'fei', 'fen', 'feng', 'fo', 'fou', 'fu',
	//d
	'da', 'dai', 'dan', 'dang', 'dao', 'de', 'den', 'dei', 'deng', 'di', 'dia', 'dian', 'diao', 'die', 'ding',
	'diu', 'dong', 'dou', 'du', 'duan', 'dui', 'dun', 'duo',
	//t
	'ta', 'tai', 'tan', 'tang', 'tao', 'te', 'teng', 'ti', 'tian', 'tiao', 'tie', 'ting', 'tong', 'tou', 'tu',
	'tuan', 'tui', 'tun', 'tuo',
	//n
	'na', 'nai', 'nan', 'nang', 'nao', 'ne', 'nei', 'nen', 'neng', 'ni', 'nian', 'niang', 'niao', 'nie', 'nin',
	'ning', 'niu', 'nong', 'nou', 'nu', 'nü', 'nuan', 'nüe', 'nuo', 'nun',
	//l
	'la', 'lai', 'lan', 'lang', 'lao', 'le', 'lei', 'leng', 'li', 'lia', 'lian', 'liang', 'liao', 'lie', 'lin',
	'ling', 'liu', 'long', 'lou', 'lu', 'lü', 'luan', 'lue', 'lüe', 'lun', 'luo',
	//g
	'ga', 'gai', 'gan', 'gang', 'gao', 'ge', 'gei', 'gen', 'geng', 'gong', 'gou', 'gu', 'gua', 'guai', 'guan',
	'guang', 'gui', 'gun', 'guo',
	//k
	'ka', 'kai', 'kan', 'kang', 'kao', 'ke', 'ken', 'keng', 'kong', 'kou', 'ku', 'kua', 'kuai', 'kuan', 'kuang',
	'kui', 'kun', 'kuo',
	//h
	'ha', 'hai', 'han', 'hang', 'hao', 'he', 'hei', 'hen', 'heng', 'hong', 'hou', 'hu', 'hua', 'huai', 'huan',
	'huang', 'hui', 'hun', 'huo',
	//j
	'ji', 'jia', 'jian', 'jiang', 'jiao', 'jie', 'jin', 'jing', 'jiong', 'jiu', 'ju', 'juan', 'jue', 'jun', 'jǔn',
	'jùn',
	//q
	'qi', 'qia', 'qian', 'qiang', 'qiao', 'qie', 'qin', 'qing', 'qiong', 'qiu', 'qu', 'quan', 'que', 'qun', 'qǔn',
	'qùn',
	//x
	'xi', 'xia', 'xian', 'xiang', 'xiao', 'xie', 'xin', 'xing', 'xiong', 'xiu', 'xu', 'xuan', 'xue', 'xun',
	//zh
	'zha', 'zhai', 'zhan', 'zhang', 'zhao', 'zhe', 'zhei', 'zhen', 'zheng', 'zhong', 'zhou', 'zhu', 'zhua', 'zhuai',
	'zhuan', 'zhuang', 'zhui', 'zhun', 'zhuo',
	//ch
	'cha', 'chai', 'chan', 'chang', 'chao', 'che', 'chen', 'cheng', 'chi', 'chong', 'chou', 'chu', 'chua', 'chuai',
	'chuan', 'chuang', 'chui', 'chun', 'chuo',
	//sh
	'sha', 'shai', 'shan', 'shang', 'shao', 'she', 'shei', 'shen', 'sheng', 'shi', 'shou', 'shu', 'shua', 'shuai',
	'shuan', 'shuang', 'shui', 'shun', 'shuo',
	//r
	'ran', 'rang', 'rao', 're', 'ren', 'reng', 'ri', 'rong', 'rou', 'ru', 'ruan', 'rui', 'run', 'ruo',
	//z
	'za', 'zai', 'zan', 'zang', 'zao', 'ze', 'zei', 'zen', 'zeng', 'zi', 'zong', 'zou', 'zu', 'zuan', 'zui', 'zun',
	'zuo',
	//c
	'ca', 'cai', 'can', 'cang', 'cao', 'ce', 'cen', 'ceng', 'ci', 'cong', 'cou', 'cu', 'cuan', 'cui', 'cun', 'cuo',
	//s
	'sa', 'sai', 'san', 'sang', 'sao', 'se', 'sen', 'seng', 'si', 'song', 'sou', 'su', 'suan', 'sui', 'sun', 'suo',
	//y
	'ya', 'yan', 'yang', 'yao', 'ye', 'yi', 'yin', 'ying', 'yo', 'yong', 'you', 'yu', 'yuan', 'yue', 'yun',
	//w
	'wa', 'wai', 'wan', 'wang', 'wei', 'wen', 'weng', 'wo', 'wu',
];
pylist = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er',
	'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l',
	'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w', 'zhi', 'chi', 'shi',
	'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'
];
shengmuList = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z',
	'c', 's', 'y', 'w',
];
jqx = ['j', 'q', 'x', 'un', 'un', 'un', 'ue', 'l', 'üe'];
spy = ['ia', 'ua', 'uo', 'uai', 'uan', 'ian', 'iao', 'iang', 'uang', 'iong'];

var Arr = Object.keys(array);

/**
 * 检查输入是否为拼音，是就返回一个拆解后的拼音数组，例如：传入一个"biao"将返回"['b','i','ao']",否就返回false
 * @param {*} str 一个拼音字符串
 * @returns 拆解后的拼音数组或false
 */
function isExistPinYin(str) {
	//先将接收的拼音的ü转换成v
	str = switchToV(str)
	//allList包含全部没有音调的拼音，如果不包含接收的拼音，则不是拼音，可能是单词
	if (allList.includes(str)) {
		//pylist包含所有韵母的整体认读音，如果包含接收的拼音，则接收的拼音是韵母或整体认读音，直接返出去发声
		if (pylist.includes(str)) {
			//因为要呈现到页面，所以要把v转换成ü
			str = switchToV(str)
			return str
		} else {
			if (str == 'lue') {	//这个拼音在网上查了，有争议，所以这里强制换成“lüe”
				str = 'lüe';
			}
			let arr = [];  //定义一个数组来保存拆分后的拼音，例如：biao将被拆分成['b','i','ao']
			arr.push(str.substr(0, 1));
			arr.push(str.substr(1, str.length));
			if (arr[1].substr(0, 1) == 'h') {  //如果拼音的第二位字符是h的话，那么这个拼音就是翘舌音，要重新拆分该拼音
				arr[0] = str.substr(0, 2);
				arr[1] = str.substr(2, str.length);
			}
			if (spy.includes(arr[1])) {  //spy是所有三节拼音的数组，所以这里要处理一下
				arr.push(arr[1].substr(1, arr[1].length));
				arr[1] = arr[1].substr(0, 1);
			}
			if (arr[1] == 'üe') {
				arr[1] = 've';
			}
			// if (str == 'lue') {
			// 	arr = ['l', 'u', 'lue'];
			// 	return arr
			// }
			if (jqx.includes(arr[0]) && arr[1].includes('u')) {		//这里处理一下ju,qu,xu
				arr[1] = arr[1].replace(/u/, 'v')
				console.log('在这里呢', arr[1])
			}
			arr.push(str);
			arr = switchToV(arr)
			return arr;
		}
	} else {
		return false;
	}
}

/**
 * 切换烦人的üe，ü，v
 * @param {*} str 
 * @returns 
 */
function switchToV(str) {
	var other = ['lü', 'lüe', 'nü', 'nüe', 'üe']
	if (str == 'v') {
		str = 'ü'
	} else if (str == 'ü') {
		str = 'v'
	} else if (other.includes(str[2])) {
		str[2] = str[2].replace(/ü/, 'v')
	}
	if (str[1] == 'ü') {
		str[1] = 'v'
	}
	return str;
}

/**
 * 创建html列表的
 * @param {*} strArr 可以是string,也可以是array
 * @param {*} divid 你要在哪个父div下创建，就传入其id
 * @returns 
 */
function createList(strArr, divid) {
	var arr, div, divobj, a;
	divobj = document.getElementById(divid);
	arr = Object.keys(array);
	if (strArr.length) {	//当strArr为字符串且不是声母和韵母时，生成二级页面，也就是以某个声母为开头的所有拼音列表
		if (arr.slice(40).includes(strArr[i])) {
			arr = Object.keys(array[strArr[i]]);
			for (let index = 0; index < arr.length; index++) {
				div = document.createElement('div');
				div.className = "large-3 medium-3 small-4 cell";
				a = document.createElement("a"); //创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
				a.className = "button expanded chinesepinyin3";
				a.innerText = arr[index];
				div.appendChild(a);
				divobj.appendChild(div);
			}
		} else {	//生成三级页面，想要生成三级页面，strArr必须是数组，三级页面显示某个拼音与其所有声调
			if (flag == 'input') {		//input模式
				arr = finElementForArr(strArr[0]);
				console.log('arr is :', arr)
				if (Object.keys(array).slice(0, 24).includes(strArr[0])) {
					div = document.createElement('div');	//创建htm元素
					div.className = "large-8 medium-8 cell";
					div2 = document.createElement('div');
					div2.className = "expanded button-group large";
					for (let index = 0; index < arr.length; index++) {
						a = document.createElement("a"); //创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
						a.className = "button expanded chinesepinyin3 customBtn";
						if (arr[index] == 'null') {
							a.innerText = '≠≠≠';
						} else {
							a.innerText = arr[index];
						}
						div2.appendChild(a);
					}
					div.appendChild(div2);
					divobj.appendChild(div);
					for (let index = 0; index < arr.length; index++) {		//给新创建的a标签加属性
						if (arr[index] == 'null') {
							$('#' + divid + ' a').eq(index).attr("disabled", true);
							$('#' + divid + ' a').eq(index).css("pointer-events", "none");
						} else {
							$('#' + divid + ' a').eq(index).attr("value", index + 1);
							$('#' + divid + ' a').eq(index).attr("text", strArr.slice(-1));
						}
					}
					document.querySelector('#showpy label').innerHTML = strArr.slice(-1)
					$('.py').show();

				} else {
					if (arr.length != 1) {
						for (let index = 0; index < arr.length; index++) {
							div = document.createElement('div');
							div.className = "large-3 medium-3 small-4 cell";
							a = document.createElement("a"); //创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
							a.className = "button expanded chinesepinyin3";
							a.innerText = arr[index];
							div.appendChild(a);
							divobj.appendChild(div);
						}
					} else {
						$('#split_pinyin').attr('maxlength', arr[0].length);
						let newArr = [];
						newArr = slpitPy(arr[0])//这句有改动
						console.log('newArr is :', newArr)
						arr = getpysd(newArr);
						div = document.createElement('div');	//创建htm元素
						div.className = "large-8 medium-8 cell";
						div2 = document.createElement('div');
						div2.className = "expanded button-group large";
						for (let index = 0; index < arr.length; index++) {
							a = document.createElement("a"); //创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
							a.className = "button expanded chinesepinyin3 customBtn";
							if (arr[index] == 'null') {
								a.innerText = '≠≠≠';
							} else {
								a.innerText = arr[index];
							}
							div2.appendChild(a);
						}
						div.appendChild(div2);
						divobj.appendChild(div);
						for (let index = 0; index < arr.length; index++) {		//给新创建的a标签加属性
							if (arr[index] == 'null') {
								$('#' + divid + ' a').eq(index).attr("disabled", true);
								$('#' + divid + ' a').eq(index).css("pointer-events", "none");
							} else {
								$('#' + divid + ' a').eq(index).attr("value", index + 1);
								$('#' + divid + ' a').eq(index).attr("text", strArr.slice(-1));
							}
						}
						document.querySelector('#showpy label').innerHTML = strArr.slice(-1);
						$('.py').show();
					}
				}
			} else {	//click模式
				arr = getpysd(strArr);
				div = document.createElement('div');
				div.className = "large-8 medium-8 cell";
				div2 = document.createElement('div');
				div2.className = "expanded button-group large";
				for (let index = 0; index < arr.length; index++) {
					a = document.createElement("a"); //创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
					a.className = "button expanded chinesepinyin3 customBtn";
					if (arr[index] == 'null') {
						a.innerText = '≠≠≠';
					} else {
						a.innerText = arr[index];
					}
					div2.appendChild(a);
				}
				div.appendChild(div2);
				divobj.appendChild(div);
				for (let index = 0; index < arr.length; index++) {
					if (arr[index] == 'null') {
						$('#' + divid + ' a').eq(index).attr("disabled", true);
						$('#' + divid + ' a').eq(index).css("pointer-events", "none");
					} else {
						$('#' + divid + ' a').eq(index).attr("value", index + 1);
						$('#' + divid + ' a').eq(index).attr("text", strArr.slice(-1));
					}
				}
				document.querySelector('#showpy label').innerHTML = strArr.slice(-1);
				$('.py').show();
			}
			return arr.length
		}
	} else {	//当strArr为空时，生成一级页面，也就是声母列表
		//arr[40]的值是'b'
		for (let index = 40; index < arr.length; index++) {
			div = document.createElement('div');
			div.className = "large-3 medium-3 small-4 cell";
			a = document.createElement("a");
			a.className = "button expanded chinesepinyin3";
			a.innerText = arr[index];
			div.appendChild(a);
			divobj.appendChild(div);
		}
	}
}


/**
 * //返回某个拼音所有声调的拼音
 * @param {*} strArr 为数组，数据格式如例：["b", "ba"]，["ch", "chuang"]
 * @returns 
 */
function getpysd(strArr) {
	// console.log(strArr)
	return array[strArr[0]][strArr[1]];
}

/**
 * 接收一个完整拼音字符串，返回一个分解后的数组，返回例子['zh', 'zhuang']
 * @param {*} str 
 * @returns 
 */
function slpitPy(str) {
	var arr = [], zcs = ['zh', 'ch', 'sh'];
	if (zcs.includes(str.slice(0, 2))) {
		arr.push(str.slice(0, 2))
	} else {
		arr.push(str.slice(0, 1))
	}
	arr.push(str)
	return arr
}

/**
 * 筛查并返回数组中以某个字符串开头所有的元素的数组，所以这里返回的是一个array
 * @param {*} str 要筛查的字符串，这里必须是开头的字符串
 * @returns 
 */
function finElementForArr(str) {
	var ymarr, smarr
	ymarr = Object.keys(array).slice(0, 24);
	smarr = Object.keys(array).slice(40);
	if (ymarr.includes(str)) {
		return array[str]
	} else {
		var pyarr, newstr;
		if (str.length > 1) {
			for (let i = 1; i <= str.length; i++) {
				newstr = str.slice(0, i)
				if (smarr.includes(newstr)) {
					pyarr = Object.keys(array[newstr])
				} else {
					pyarr = pyarr.filter(function (ele, index) { return ele.startsWith(newstr) })
				}
			}
			return pyarr
		} else {
			return Object.keys(array[str])
		}
	}
}

function delay(time) {
	return new Promise(succ => {
		setTimeout(succ, time)
	})
}

$(function () {
	var player = $("#player")[0];
	var baiduPyUrl = 'https://hanyu-word-pinyin-short.cdn.bcebos.com/';
	var hanyuPyUrl = 'http://du.hanyupinyin.cn/du/pinyin/';
	var mp3 = document.createElement('source');
	mp3.type = 'audio/mpeg';
	$("#player").append(mp3);
	// pyArr = []; //定义一个数组来保存点击每个a标签的值，例如:pyArr = ['b', 'ai']
	createList(pyArr, 'smlist'); //调用createList来创建元素
	$("div#smlist").delegate("a", "click", async function () {
		flag = 'click';
		if (i < 2) {
			pyArr.push($(this).html()); //把每次点击的值保存到数组里面
			$('#smlist').empty() //清空smlist下所有元素
			num = createList(pyArr, 'smlist')
			$('.reset').show();
		} else if (typeof isExistPinYin(pyArr[1]) == 'string') {
			arr = isExistPinYin(pyArr[1]);
			mp3.src = hanyuPyUrl + arr + $(this).attr('value') + '.mp3';
			console.log(player)
			player.load();
			player.play();
		} else {
			arr = isExistPinYin(pyArr[1]);
			console.log(arr)
			for (let index = 0; index < arr.length; index++) {
				if (index < arr.length - 1) {
					if (index < arr.length - 2) {
						mp3.src = hanyuPyUrl + arr[index] + '.mp3';
					} else {
						mp3.src = hanyuPyUrl + arr[index] + $(this).attr('value') + '.mp3';
					}
				} else {
					mp3.src = baiduPyUrl + arr[index] + $(this).attr('value') + '.mp3';
					console.log(mp3.src)
				}
				player.load();
				player.play();
				await delay(1000);
			}
		}
		i++;
	});
	$('#ydlist').delegate('a', 'click', async function () {
		flag = 'click';
		var pyArr;
		if (document.querySelectorAll('#ydlist .large a').length > 0) {
			pyArr = $(this).attr('text');
			if (Object.keys(array).slice(0, 24).includes(pyArr)) {
				mp3.src = hanyuPyUrl + pyArr + $(this).attr('value') + '.mp3';
				player.load();
				player.play();
				await delay(1000);
			} else {
				arr = isExistPinYin(pyArr);
				console.log(arr)
				for (let index = 0; index < arr.length; index++) {
					if (index < arr.length - 1) {
						if (index < arr.length - 2) {
							mp3.src = hanyuPyUrl + arr[index] + '.mp3';
						} else {
							mp3.src = hanyuPyUrl + arr[index] + $(this).attr('value') + '.mp3';
						}
					} else {
						mp3.src = baiduPyUrl + arr[index] + $(this).attr('value') + '.mp3';
						console.log(mp3.src)
					}
					player.load();
					player.play();
					await delay(1000);
				}
			}
		} else {
			$('#ydlist').empty();
			pyArr = $(this).html();
			createList(slpitPy(pyArr), 'ydlist');
		}
	})
	$('.combined').on('click', function () {
		flag = 'click';
		pyArr = [];
		i = 0;
		$('#smlist').empty();
		$('#ydlist').empty();
		createList(pyArr, 'smlist')
		$($('.py')).hide();
		$($('.toggle')[0]).show();
		$($('.toggle')[1]).hide();
		$($('.reset')[0]).hide();
	});
	$('.split').on('click', function () {
		flag = 'input'
		i = 1;
		$($('.py')).hide();
		$($('.toggle')[0]).hide();
		$($('.toggle')[1]).show();
		$($('.reset')[0]).hide();
	});
	$('#split_pinyin').on('click', function () {
		$('#split_pinyin').attr("style", "color: #0a0a0a");
		document.querySelector('#split_pinyin').value = "";
		$('#ydlist').empty();
	})
	$('#split_pinyin').bind('input propertychange', function () {
		$('#ydlist').empty();
		$('#showpy').hide();
		var strArr = [];
		strArr.push($('#split_pinyin').val());
		createList(strArr, 'ydlist');
	})
	$('.reset').on('click', function () {
		pyArr = [];
		i = 0;
		$('#smlist').empty();
		createList(pyArr, 'smlist');
		$($('.py')).hide();
		$($('.toggle')[0]).show();
		$($('.toggle')[1]).hide();
		$($('.reset')[0]).hide();
	})
});