function isExist(str) {
    var pylist, jqx, spy, array;
    array = [
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
        'ba', 'bai', 'bai', 'bang', 'bao', 'bei', 'ben', 'beng', 'bi', 'bian', 'biao', 'bie', 'bin', 'bing', 'bo', 'bu',
        //p
        'pa', 'pai', 'pan', 'pang', 'pao', 'pei', 'pen', 'peng', 'pi', 'pian', 'piao', 'pie', 'pin', 'ping', 'po', 'pou', 'pu',
        //m
        'ma', 'mai', 'man', 'mang', 'mao', 'me', 'mei', 'men', 'meng', 'mi', 'mian', 'miao', 'mie', 'min', 'ming', 'miu', 'mo', 'mou', 'mu',
        //f
        'fa', 'fan', 'fang', 'fei', 'fen', 'feng', 'fo', 'fou', 'fu',
        //d
        'da', 'dai', 'dan', 'dang', 'dao', 'de', 'den', 'dei', 'deng', 'di', 'dia', 'dian', 'diao', 'die', 'ding', 'diu', 'dong', 'dou', 'du', 'duan', 'dui', 'dun', 'duo',
        //t
        'ta', 'tai', 'tan', 'tang', 'tao', 'te', 'teng', 'ti', 'tian', 'tiao', 'tie', 'ting', 'tong', 'tou', 'tu', 'tuan', 'tui', 'tun', 'tuo',
        //n
        'na', 'nai', 'nan', 'nang', 'nao', 'ne', 'nei', 'nen', 'neng', 'ni', 'nian', 'niang', 'niao', 'nie', 'nin', 'ning', 'niu', 'nong', 'nou', 'nu', 'nü', 'nuan', 'nüe', 'nuo', 'nun',
        //l
        'la', 'lai', 'lan', 'lang', 'lao', 'le', 'lei', 'leng', 'li', 'lia', 'lian', 'liang', 'liao', 'lie', 'lin', 'ling', 'liu', 'long', 'lou', 'lu', 'lü', 'luan', 'lue', 'lüe', 'lun', 'luo',
        //g
        'ga', 'gai', 'gan', 'gang', 'gao', 'ge', 'gei', 'gen', 'geng', 'gong', 'gou', 'gu', 'gua', 'guai', 'guan', 'guang', 'gui', 'gun', 'guo',
        //k
        'ka', 'kai', 'kan', 'kang', 'kao', 'ke', 'ken', 'keng', 'kong', 'kou', 'ku', 'kua', 'kuai', 'kuan', 'kuang', 'kui', 'kun', 'kuo',
        //h
        'ha', 'hai', 'han', 'hang', 'hao', 'he', 'hei', 'hen', 'heng', 'hong', 'hou', 'hu', 'hua', 'huai', 'huan', 'huang', 'hui', 'hun', 'huo',
        //j
        'ji', 'jia', 'jian', 'jiang', 'jiao', 'jie', 'jin', 'jing', 'jiong', 'jiu', 'ju', 'juan', 'jue', 'jun', 'jǔn', 'jùn',
        //q
        'qi', 'qia', 'qian', 'qiang', 'qiao', 'qie', 'qin', 'qing', 'qiong', 'qiu', 'qu', 'quan', 'que', 'qun', 'qǔn', 'qùn',
        //x
        'xi', 'xia', 'xian', 'xiang', 'xiao', 'xie', 'xin', 'xing', 'xiong', 'xiu', 'xu', 'xuan', 'xue', 'xun',
        //zh
        'zha', 'zhai', 'zhan', 'zhang', 'zhao', 'zhe', 'zhei', 'zhen', 'zheng', 'zhong', 'zhou', 'zhu', 'zhua', 'zhuai', 'zhuan', 'zhuang', 'zhui', 'zhun', 'zhuo',
        //ch
        'cha', 'chai', 'chan', 'chang', 'chao', 'che', 'chen', 'cheng', 'chi', 'chong', 'chou', 'chu', 'chua', 'chuai', 'chuan', 'chuang', 'chui', 'chun', 'chuo',
        //sh
        'sha', 'shai', 'shan', 'shang', 'shao', 'she', 'shei', 'shen', 'sheng', 'shi', 'shou', 'shu', 'shua', 'shuai', 'shuan', 'shuang', 'shui', 'shun', 'shuo',
        //r
        'ran', 'rang', 'rao', 're', 'ren', 'reng', 'ri', 'rong', 'rou', 'ru', 'ruan', 'rui', 'run', 'ruo',
        //z
        'za', 'zai', 'zan', 'zang', 'zao', 'ze', 'zei', 'zen', 'zeng', 'zi', 'zong', 'zou', 'zu', 'zuan', 'zui', 'zun', 'zuo',
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
        'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'];
    jqx = ['j', 'q', 'x'];
    spy = ['ia', 'ua', 'uo', 'uai', 'uan', 'ian', 'iao', 'iang', 'uang', 'iong'];
    if (array.includes(str)) {
        if (pylist.includes(str)) {
            return str
        }
        else {
            let arr = [];
            arr.push(str.substr(0, 1));
            arr.push(str.substr(1, str.length));
            if (arr[1].substr(0, 1) == 'h') {
                arr[0] = str.substr(0, 2);
                arr[1] = str.substr(2, str.length);
            }
            if (spy.includes(arr[1])) {
                arr.push(arr[1].substr(1, arr[1].length));
                arr[1] = arr[1].substr(0, 1);
            }
            if (arr[1] == 'ue') {
                arr[1] = 'üe';
            }
            if (jqx.includes(arr[0]) && arr[1] == 'u') {
                arr[1] = 'ü';
            }
            arr.push(str);
            // console.log(arr)
            return arr;
        }
    }
    else {
        console.log('您输入的不是正确的拼音，请重新输入，谢谢！');
        return false;
    }
}