

var array = {
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
        'ban': ['bān', 'bán', 'bǎn', 'bàn'],
        'bang': ['bāng', 'báng', 'bǎng', 'bàng'],
        'bao': ['bāo', 'báo', 'bǎo', 'bào'],
        'bei': ['bēi', 'béi', 'běi', 'bèi'],
        'ben': ['bēn', 'bén', 'běn', 'bèn'],
        'beng': ['bēng', 'béng', 'běng', 'bèng'],
        'bi': ['bī', 'bí', 'bǐ', 'bì'],
        'bian': ['biān', 'bián', 'biǎn', 'biàn'],
        'biao': ['biāo', 'biáo', 'biǎo', 'biào'],
        'bie': ['biē', 'bié', 'biě', 'biè'],
        'bin': ['bīn', 'bín', 'bǐn', 'bìn'],
        'bing': ['bīng', 'bíng', 'bǐng', 'bìng'],
        'bo': ['bō', 'bó', 'bǒ', 'bò'],
        'bu': ['bū', 'bú', 'bǔ', 'bù']
    },

    p: {
        'pa': ['pā', 'pá', 'pǎ', 'pà'],
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
        'pie': ['piē', 'pié', 'piě', 'piè'],
        'pin': ['pīn', 'pín', 'pǐn', 'pìn'],
        'ping': ['pīng', 'píng', 'pǐng', 'pìng'],
        'po': ['pō', 'pó', 'pǒ', 'pò'],
        'pou': ['pōu', 'póu', 'pǒu', 'pòu'],
        'pu': ['pū', 'pú', 'pǔ', 'pù']
    },
    m: {
        'ma': ['mā', 'má', 'mǎ', 'mà'],
        'mai': ['māi', 'mái', 'mǎi', 'mài'],
        'man': ['mān', 'mán', 'mǎn', 'màn'],
        'mang': ['māng', 'máng', 'mǎng', 'màng'],
        'mao': ['māo', 'máo', 'mǎo', 'mào'],
        'me': ['mē', 'mé', 'mě', 'mè'],
        'mei': ['mēi', 'méi', 'měi', 'mèi'],
        'men': ['mēn', 'mén', 'měn', 'mèn'],
        'meng': ['mēng', 'méng', 'měng', 'mèng'],
        'mi': ['mī', 'mí', 'mǐ', 'mì'],
        'mian': ['miān', 'mián', 'miǎn', 'miàn'],
        'miao': ['miāo', 'miáo', 'miǎo', 'miào'],
        'mie': ['miē', 'mié', 'miě', 'miè'],
        'min': ['mīn', 'mín', 'mǐn', 'mìn'],
        'ming': ['mīng', 'míng', 'mǐng', 'mìng'],
        'miu': ['miū', 'miú', 'miǔ', 'miù'],
        'mo': ['mō', 'mó', 'mǒ', 'mò'],
        'mou': ['mōu', 'móu', 'mǒu', 'mòu'],
        'mu': ['mū', 'mú', 'mǔ', 'mù']
    },
    f: {
        'fa': ['fā', 'fá', 'fǎ', 'fà'],
        'fan': ['fān', 'fán', 'fǎn', 'fàn'],
        'fang': ['fāng', 'fáng', 'fǎng', 'fàng'],
        'fei': ['fēi', 'féi', 'fěi', 'fèi'],
        'fen': ['fēn', 'fén', 'fěn', 'fèn'],
        'feng': ['fēng', 'féng', 'fěng', 'fèng'],
        'fo': ['fō', 'fó', 'fǒ', 'fò'],
        'fou': ['fōu', 'fóu', 'fǒu', 'fòu'],
        'fu': ['fū', 'fú', 'fǔ', 'fù']
    },
    d: {
        'da': ['dā', 'dá', 'dǎ', 'dà'],
        'dai': ['dāi', 'dái', 'dǎi', 'dài'],
        'dan': ['dān', 'dán', 'dǎn', 'dàn'],
        'dang': ['dāng', 'dáng', 'dǎng', 'dàng'],
        'dao': ['dāo', 'dáo', 'dǎo', 'dào'],
        'de': ['dē', 'dé', 'dě', 'dè'],
        'den': ['dēn', 'dén', 'děn', 'dèn'],
        'dei': ['dēi', 'déi', 'děi', 'dèi'],
        'deng': ['dēng', 'déng', 'děng', 'dèng'],
        'di': ['dī', 'dí', 'dǐ', 'dì'],
        'dia': ['diǎ'],
        'dian': ['diān', 'dián', 'diǎn', 'diàn'],
        'diao': ['diāo', 'diáo', 'diǎo', 'diào'],
        'die': ['diē', 'dié', 'diě', 'diè'],
        'ding': ['dīng', 'díng', 'dǐng', 'dìng'],
        'diu': ['diū', 'diú', 'diǔ', 'diù'],
        'dong': ['dōng', 'dóng', 'dǒng', 'dòng'],
        'dou': ['dōu', 'dóu', 'dǒu', 'dòu'],
        'du': ['dū', 'dú', 'dǔ', 'dù'],
        'duan': ['duān', 'duán', 'duǎn', 'duàn'],
        'dui': ['duī', 'duí', 'duǐ', 'duì'],
        'dun': ['dūn', 'dún', 'dǔn', 'dùn'],
        'duo': ['duō', 'duó', 'duǒ', 'duò']
    },
    t: {
        'ta': ['tā', 'tá', 'tǎ', 'tà'],
        'tai': ['tāi', 'tái', 'tǎi', 'tài'],
        'tan': ['tān', 'tán', 'tǎn', 'tàn'],
        'tang': ['tāng', 'táng', 'tǎng', 'tàng'],
        'tao': ['tāo', 'táo', 'tǎo', 'tào'],
        'te': ['tē', 'té', 'tě', 'tè'],
        'teng': ['tēng', 'téng', 'těng', 'tèng'],
        'ti': ['tī', 'tí', 'tǐ', 'tì'],
        'tian': ['tiān', 'tián', 'tiǎn', 'tiàn'],
        'tiao': ['tiāo', 'tiáo', 'tiǎo', 'tiào'],
        'tie': ['tiē', 'tié', 'tiě', 'tiè'],
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
        'nai': ['nāi', 'nái', 'nǎi', 'nài'],
        'nan': ['nān', 'nán', 'nǎn', 'nàn'],
        'nang': ['nāng', 'náng', 'nǎng', 'nàng'],
        'nao': ['nāo', 'náo', 'nǎo', 'nào'],
        'ne': ['nē', 'né', 'ně', 'nè'],
        'nei': ['nēi', 'néi', 'něi', 'nèi'],
        'nen': ['nēn', 'nén', 'něn', 'nèn'],
        'neng': ['nēng', 'néng', 'něng', 'nèng'],
        'ni': ['nī', 'ní', 'nǐ', 'nì'],
        'nian': ['niān', 'nián', 'niǎn', 'niàn'],
        'niang': ['niāng', 'niáng', 'niǎng', 'niàng'],
        'niao': ['niāo', 'niáo', 'niǎo', 'niào'],
        'nie': ['niē', 'nié', 'niě', 'niè'],
        'nin': ['nīn', 'nín', 'nǐn', 'nìn'],
        'ning': ['nīng', 'níng', 'nǐng', 'nìng'],
        'niu': ['niū', 'niú', 'niǔ', 'niù'],
        'nong': ['nōng', 'nóng', 'nǒng', 'nòng'],
        'nou': ['nōu', 'nóu', 'nǒu', 'nòu'],
        'nu': ['nū', 'nú', 'nǔ', 'nù'],
        'nü': ['nǖ', 'nǘ', 'nǚ', 'nǜ'],
        'nuan': ['nuān', 'nuán', 'nuǎn', 'nuàn'],
        'nüe': ['nüē', 'nüé', 'nüě', 'nüè'],
        'nuo': ['nuō', 'nuó', 'nuǒ', 'nuò'],
        'nun': ['nūn', 'nún', 'nǔn', 'nùn']
    },
    l: {
        'la': ['lā', 'lá', 'lǎ', 'là'],
        'lai': ['lāi', 'lái', 'lǎi', 'lài'],
        'lan': ['lān', 'lán', 'lǎn', 'làn'],
        'lang': ['lāng', 'láng', 'lǎng', 'làng'],
        'lao': ['lāo', 'láo', 'lǎo', 'lào'],
        'le': ['lē', 'lé', 'lě', 'lè'],
        'lei': ['lēi', 'léi', 'lěi', 'lèi'],
        'leng': ['lēng', 'léng', 'lěng', 'lèng'],
        'li': ['lī', 'lí', 'lǐ', 'lì'],
        'lia': ['liā', 'liá', 'liǎ', 'lià'],
        'lian': ['liān', 'lián', 'liǎn', 'liàn'],
        'liang': ['liāng', 'liáng', 'liǎng', 'liàng'],
        'liao': ['liāo', 'liáo', 'liǎo', 'liào'],
        'lie': ['liē', 'lié', 'liě', 'liè'],
        'lin': ['līn', 'lín', 'lǐn', 'lìn'],
        'ling': ['līng', 'líng', 'lǐng', 'lìng'],
        'liu': ['liū', 'liú', 'liǔ', 'liù'],
        'long': ['lōng', 'lóng', 'lǒng', 'lòng'],
        'lou': ['lōu', 'lóu', 'lǒu', 'lòu'],
        'lu': ['lū', 'lú', 'lǔ', 'lù'],
        'lü': ['lǖ', 'lǘ', 'lǚ', 'lǜ'],
        'luan': ['luān', 'luán', 'luǎn', 'luàn'],
        'lue': ['luē', 'lué', 'luě', 'luè'],
        'lüe': ['lüē', 'lüé', 'lüě', 'lüè'],
        'lun': ['lūn', 'lún', 'lǔn', 'lùn'],
        'luo': ['luō', 'luó', 'luǒ', 'luò']
    },
    g: {
        'ga': ['gā', 'gá', 'gǎ', 'gà'],
        'gai': ['gāi', 'gái', 'gǎi', 'gài'],
        'gan': ['gān', 'gán', 'gǎn', 'gàn'],
        'gang': ['gāng', 'gáng', 'gǎng', 'gàng'],
        'gao': ['gāo', 'gáo', 'gǎo', 'gào'],
        'ge': ['gē', 'gé', 'gě', 'gè'],
        'gei': ['gēi', 'géi', 'gěi', 'gèi'],
        'gen': ['gēn', 'gén', 'gěn', 'gèn'],
        'geng': ['gēng', 'géng', 'gěng', 'gèng'],
        'gong': ['gōng', 'góng', 'gǒng', 'gòng'],
        'gou': ['gōu', 'góu', 'gǒu', 'gòu'],
        'gu': ['gū', 'gú', 'gǔ', 'gù'],
        'gua': ['guā', 'guá', 'guǎ', 'guà'],
        'guai': ['guāi', 'guái', 'guǎi', 'guài'],
        'guan': ['guān', 'guán', 'guǎn', 'guàn'],
        'guang': ['guāng', 'guáng', 'guǎng', 'guàng'],
        'gui': ['guī', 'guí', 'guǐ', 'guì'],
        'gun': ['gūn', 'gún', 'gǔn', 'gùn'],
        'guo': ['guō', 'guó', 'guǒ', 'guò']
    },
    k: {
        'ka': ['kā', 'ká', 'kǎ', 'kà'],
        'kai': ['kāi', 'kái', 'kǎi', 'kài'],
        'kan': ['kān', 'kán', 'kǎn', 'kàn'],
        'kang': ['kāng', 'káng', 'kǎng', 'kàng'],
        'kao': ['kāo', 'káo', 'kǎo', 'kào'],
        'ke': ['kē', 'ké', 'kě', 'kè'],
        'ken': ['kēn', 'kén', 'kěn', 'kèn'],
        'keng': ['kēng', 'kéng', 'kěng', 'kèng'],
        'kong': ['kōng', 'kóng', 'kǒng', 'kòng'],
        'kou': ['kōu', 'kóu', 'kǒu', 'kòu'],
        'ku': ['kū', 'kú', 'kǔ', 'kù'],
        'kua': ['kuā', 'kuá', 'kuǎ', 'kuà'],
        'kuai': ['kuāi', 'kuái', 'kuǎi', 'kuài'],
        'kuan': ['kuān', 'kuán', 'kuǎn', 'kuàn'],
        'kuang': ['kuāng', 'kuáng', 'kuǎng', 'kuàng'],
        'kui': ['kuī', 'kuí', 'kuǐ', 'kuì'],
        'kun': ['kūn', 'kún', 'kǔn', 'kùn'],
        'kuo': ['kuō', 'kuó', 'kuǒ', 'kuò']
    },
    h: {
        'ha': ['hā', 'há', 'hǎ', 'hà'],
        'hai': ['hāi', 'hái', 'hǎi', 'hài'],
        'han': ['hān', 'hán', 'hǎn', 'hàn'],
        'hang': ['hāng', 'háng', 'hǎng', 'hàng'],
        'hao': ['hāo', 'háo', 'hǎo', 'hào'],
        'he': ['hē', 'hé', 'hě', 'hè'],
        'hei': ['hēi', 'héi', 'hěi', 'hèi'],
        'hen': ['hēn', 'hén', 'hěn', 'hèn'],
        'heng': ['hēng', 'héng', 'hěng', 'hèng'],
        'hong': ['hōng', 'hóng', 'hǒng', 'hòng'],
        'hou': ['hōu', 'hóu', 'hǒu', 'hòu'],
        'hu': ['hū', 'hú', 'hǔ', 'hù'],
        'hua': ['huā', 'huá', 'huǎ', 'huà'],
        'huai': ['huāi', 'huái', 'huǎi', 'huài'],
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
        'jiang': ['jiāng', 'jiáng', 'jiǎng', 'jiàng'],
        'jiao': ['jiāo', 'jiáo', 'jiǎo', 'jiào'],
        'jie': ['jiē', 'jié', 'jiě', 'jiè'],
        'jin': ['jīn', 'jín', 'jǐn', 'jìn'],
        'jing': ['jīng', 'jíng', 'jǐng', 'jìng'],
        'jiong': ['jiōng', 'jióng', 'jiǒng', 'jiòng'],
        'jiu': ['jiū', 'jiú', 'jiǔ', 'jiù'],
        'ju': ['jū', 'jú', 'jǔ', 'jù'],
        'juan': ['juān', 'juán', 'juǎn', 'juàn'],
        'jue': ['juē', 'jué', 'juě', 'juè'],
        'jun': ['jūn', 'jún', 'jǔn', 'jùn']
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
        'qiong': ['qiōng', 'qióng', 'qiǒng', 'qiòng'],
        'qiu': ['qiū', 'qiú', 'qiǔ', 'qiù'],
        'qu': ['qū', 'qú', 'qǔ', 'qù'],
        'quan': ['quān', 'quán', 'quǎn', 'quàn'],
        'que': ['quē', 'qué', 'quě', 'què'],
        'qun': ['qūn', 'qún', 'qǔn', 'qùn']
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
        'xun': ['xūn', 'xún', 'xǔn', 'xùn']
    },
    zh: {
        'zha': ['zhā', 'zhá', 'zhǎ', 'zhà'],
        'zhai': ['zhāi', 'zhái', 'zhǎi', 'zhài'],
        'zhan': ['zhān', 'zhán', 'zhǎn', 'zhàn'],
        'zhang': ['zhāng', 'zháng', 'zhǎng', 'zhàng'],
        'zhao': ['zhāo', 'zháo', 'zhǎo', 'zhào'],
        'zhe': ['zhē', 'zhé', 'zhě', 'zhè'],
        'zhei': ['zhēi', 'zhéi', 'zhěi', 'zhèi'],
        'zhen': ['zhēn', 'zhén', 'zhěn', 'zhèn'],
        'zheng': ['zhēng', 'zhéng', 'zhěng', 'zhèng'],
        'zhong': ['zhōng', 'zhóng', 'zhǒng', 'zhòng'],
        'zhou': ['zhōu', 'zhóu', 'zhǒu', 'zhòu'],
        'zhu': ['zhū', 'zhú', 'zhǔ', 'zhù'],
        'zhua': ['zhuā', 'zhuá', 'zhuǎ', 'zhuà'],
        'zhuai': ['zhuāi', 'zhuái', 'zhuǎi', 'zhuài'],
        'zhuan': ['zhuān', 'zhuán', 'zhuǎn', 'zhuàn'],
        'zhuang': ['zhuāng', 'zhuáng', 'zhuǎng', 'zhuàng'],
        'zhui': ['zhuī', 'zhuí', 'zhuǐ', 'zhuì'],
        'zhun': ['zhūn', 'zhún', 'zhǔn', 'zhùn'],
        'zhuo': ['zhuō', 'zhuó', 'zhuǒ', 'zhuò']
    },
    ch: {
        'cha': ['chā', 'chá', 'chǎ', 'chà'],
        'chai': ['chāi', 'chái', 'chǎi', 'chài'],
        'chan': ['chān', 'chán', 'chǎn', 'chàn'],
        'chang': ['chāng', 'cháng', 'chǎng', 'chàng'],
        'chao': ['chāo', 'cháo', 'chǎo', 'chào'],
        'che': ['chē', 'ché', 'chě', 'chè'],
        'chen': ['chēn', 'chén', 'chěn', 'chèn'],
        'cheng': ['chēng', 'chéng', 'chěng', 'chèng'],
        'chi': ['chī', 'chí', 'chǐ', 'chì'],
        'chong': ['chōng', 'chóng', 'chǒng', 'chòng'],
        'chou': ['chōu', 'chóu', 'chǒu', 'chòu'],
        'chu': ['chū', 'chú', 'chǔ', 'chù'],
        'chua': ['chuā', 'chuá', 'chuǎ', 'chuà'],
        'chuai': ['chuāi', 'chuái', 'chuǎi', 'chuài'],
        'chuan': ['chuān', 'chuán', 'chuǎn', 'chuàn'],
        'chuang': ['chuāng', 'chuáng', 'chuǎng', 'chuàng'],
        'chui': ['chuī', 'chuí', 'chuǐ', 'chuì'],
        'chun': ['chūn', 'chún', 'chǔn', 'chùn'],
        'chuo': ['chuō', 'chuó', 'chuǒ', 'chuò']
    },
    sh: {
        'sha': ['shā', 'shá', 'shǎ', 'shà'],
        'shai': ['shāi', 'shái', 'shǎi', 'shài'],
        'shan': ['shān', 'shán', 'shǎn', 'shàn'],
        'shang': ['shāng', 'sháng', 'shǎng', 'shàng'],
        'shao': ['shāo', 'sháo', 'shǎo', 'shào'],
        'she': ['shē', 'shé', 'shě', 'shè'],
        'shei': ['shēi', 'shéi', 'shěi', 'shèi'],
        'shen': ['shēn', 'shén', 'shěn', 'shèn'],
        'sheng': ['shēng', 'shéng', 'shěng', 'shèng'],
        'shi': ['shī', 'shí', 'shǐ', 'shì'],
        'shou': ['shōu', 'shóu', 'shǒu', 'shòu'],
        'shu': ['shū', 'shú', 'shǔ', 'shù'],
        'shua': ['shuā', 'shuá', 'shuǎ', 'shuà'],
        'shuai': ['shuāi', 'shuái', 'shuǎi', 'shuài'],
        'shuan': ['shuān', 'shuán', 'shuǎn', 'shuàn'],
        'shuang': ['shuāng', 'shuáng', 'shuǎng', 'shuàng'],
        'shui': ['shuī', 'shuí', 'shuǐ', 'shuì'],
        'shun': ['shūn', 'shún', 'shǔn', 'shùn'],
        'shuo': ['shuō', 'shuó', 'shuǒ', 'shuò']
    },
    r: {
        'ran': ['rān', 'rán', 'rǎn', 'ràn'],
        'rang': ['rāng', 'ráng', 'rǎng', 'ràng'],
        'rao': ['rāo', 'ráo', 'rǎo', 'rào'],
        're': ['rē', 'ré', 'rě', 'rè'],
        'ren': ['rēn', 'rén', 'rěn', 'rèn'],
        'reng': ['rēng', 'réng', 'rěng', 'rèng'],
        'ri': ['rī', 'rí', 'rǐ', 'rì'],
        'rong': ['rōng', 'róng', 'rǒng', 'ròng'],
        'rou': ['rōu', 'róu', 'rǒu', 'ròu'],
        'ru': ['rū', 'rú', 'rǔ', 'rù'],
        'ruan': ['ruān', 'ruán', 'ruǎn', 'ruàn'],
        'rui': ['ruī', 'ruí', 'ruǐ', 'ruì'],
        'run': ['rūn', 'rún', 'rǔn', 'rùn'],
        'ruo': ['ruō', 'ruó', 'ruǒ', 'ruò']
    },
    z: {
        'za': ['zā', 'zá', 'zǎ', 'zà'],
        'zai': ['zāi', 'zái', 'zǎi', 'zài'],
        'zan': ['zān', 'zán', 'zǎn', 'zàn'],
        'zang': ['zāng', 'záng', 'zǎng', 'zàng'],
        'zao': ['zāo', 'záo', 'zǎo', 'zào'],
        'ze': ['zē', 'zé', 'zě', 'zè'],
        'zei': ['zēi', 'zéi', 'zěi', 'zèi'],
        'zen': ['zēn', 'zén', 'zěn', 'zèn'],
        'zeng': ['zēng', 'zéng', 'zěng', 'zèng'],
        'zi': ['zī', 'zí', 'zǐ', 'zì'],
        'zong': ['zōng', 'zóng', 'zǒng', 'zòng'],
        'zou': ['zōu', 'zóu', 'zǒu', 'zòu'],
        'zu': ['zū', 'zú', 'zǔ', 'zù'],
        'zuan': ['zuān', 'zuán', 'zuǎn', 'zuàn'],
        'zui': ['zuī', 'zuí', 'zuǐ', 'zuì'],
        'zun': ['zūn', 'zún', 'zǔn', 'zùn'],
        'zuo': ['zuō', 'zuó', 'zuǒ', 'zuò']
    },
    c: {
        'ca': ['cā', 'cá', 'cǎ', 'cà'],
        'cai': ['cāi', 'cái', 'cǎi', 'cài'],
        'can': ['cān', 'cán', 'cǎn', 'càn'],
        'cang': ['cāng', 'cáng', 'cǎng', 'càng'],
        'cao': ['cāo', 'cáo', 'cǎo', 'cào'],
        'ce': ['cē', 'cé', 'cě', 'cè'],
        'cen': ['cēn', 'cén', 'cěn', 'cèn'],
        'ceng': ['cēng', 'céng', 'cěng', 'cèng'],
        'ci': ['cī', 'cí', 'cǐ', 'cì'],
        'cong': ['cōng', 'cóng', 'cǒng', 'còng'],
        'cou': ['cōu', 'cóu', 'cǒu', 'còu'],
        'cu': ['cū', 'cú', 'cǔ', 'cù'],
        'cuan': ['cuān', 'cuán', 'cuǎn', 'cuàn'],
        'cui': ['cuī', 'cuí', 'cuǐ', 'cuì'],
        'cun': ['cūn', 'cún', 'cǔn', 'cùn'],
        'cuo': ['cuō', 'cuó', 'cuǒ', 'cuò']
    },
    s: {
        'sa': ['sā', 'sá', 'sǎ', 'sà'],
        'sai': ['sāi', 'sái', 'sǎi', 'sài'],
        'san': ['sān', 'sán', 'sǎn', 'sàn'],
        'sang': ['sāng', 'sáng', 'sǎng', 'sàng'],
        'sao': ['sāo', 'sáo', 'sǎo', 'sào'],
        'se': ['sē', 'sé', 'sě', 'sè'],
        'sen': ['sēn', 'sén', 'sěn', 'sèn'],
        'seng': ['sēng', 'séng', 'sěng', 'sèng'],
        'si': ['sī', 'sí', 'sǐ', 'sì'],
        'song': ['sōng', 'sóng', 'sǒng', 'sòng'],
        'sou': ['sōu', 'sóu', 'sǒu', 'sòu'],
        'su': ['sū', 'sú', 'sǔ', 'sù'],
        'suan': ['suān', 'suán', 'suǎn', 'suàn'],
        'sui': ['suī', 'suí', 'suǐ', 'suì'],
        'sun': ['sūn', 'sún', 'sǔn', 'sùn'],
        'suo': ['suō', 'suó', 'suǒ', 'suò']
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
        'yo': ['yō', 'yó', 'yǒ', 'yò'],
        'yong': ['yōng', 'yóng', 'yǒng', 'yòng'],
        'you': ['yōu', 'yóu', 'yǒu', 'yòu'],
        'yu': ['yū', 'yú', 'yǔ', 'yù'],
        'yuan': ['yuān', 'yuán', 'yuǎn', 'yuàn'],
        'yue': ['yuē', 'yué', 'yuě', 'yuè'],
        'yun': ['yūn', 'yún', 'yǔn', 'yùn']
    },
    w: {
        'wa': ['wā', 'wá', 'wǎ', 'wà'],
        'wai': ['wāi', 'wái', 'wǎi', 'wài'],
        'wan': ['wān', 'wán', 'wǎn', 'wàn'],
        'wang': ['wāng', 'wáng', 'wǎng', 'wàng'],
        'wei': ['wēi', 'wéi', 'wěi', 'wèi'],
        'wen': ['wēn', 'wén', 'wěn', 'wèn'],
        'weng': ['wēng', 'wéng', 'wěng', 'wèng'],
        'wo': ['wō', 'wó', 'wǒ', 'wò'],
        'wu': ['wū', 'wú', 'wǔ', 'wù']
    }
};
// var Arr = Object.keys(array);
// console.log(arr[40]);  //array
// console.log(Arr['b']);
// console.log(array['b']['bai'])
var i = 0;
function createList(strArr, divid) {
    var arr, div, divobj, a, sm, py;
    divobj = document.getElementById(divid);
    arr = Object.keys(array);
    if (strArr.length) {
        if (arr.slice(40).includes(strArr[i])) {
            arr = Object.keys(array[strArr[i]]);
            for (let index = 0; index < arr.length; index++) {
                div = document.createElement('div');
                div.className = "large-3 medium-3 small-4 cell";
                a = document.createElement("a");//创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
                a.className = "button expanded chinesepinyin3";
                a.innerText = arr[index];
                div.appendChild(a);
                divobj.appendChild(div);
            }
        } else {
            arr = array[strArr[0]][strArr[1]];
            div = document.createElement('div');
            div.className = "large-8 medium-8 cell";
            div2 = document.createElement('div');
            div2.className = "expanded button-group large";
            for (let index = 0; index < arr.length; index++) {
                a = document.createElement("a");//创建一个li标签 li.innerHTML = "123"; //给li标签赋值   
                a.className = "button expanded chinesepinyin3";
                a.innerText = arr[index];
                a.attr = index + 1
                div2.appendChild(a);
            }
            div.appendChild(div2);
            divobj.appendChild(div);
            return arr.length
        }
    } else {
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