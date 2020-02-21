var words = [
	'title&文章',
	'资源目录&http://t.cn/E99Oeyl',
	'图片藏密 get√&http://t.cn/AiDgQwob',
	'书签调用api&http://t.cn/AiDg8ouK',
	'多平台的电视直播&http://t.cn/A6hH1uIQ',
	'影视APP&http://t.cn/A6hHBFpq',
	'无损音乐下载~&http://t.cn/A6hHrccZ',
	'音乐下载网站&http://t.cn/A6hHrOg6',
	'观看世界名著&http://t.cn/A6hHrEQl',
	'电子书下载网站&http://t.cn/A6hHd73J',
	'两款看书app&http://t.cn/A6hHd5se',
	'清爽的看小说&http://t.cn/A6hHdlxj',
	'有趣网站&http://t.cn/A6hHde7R',
	'知乎视频下载&http://t.cn/A6hHgIql',
	'解压游戏&http://t.cn/A6hHgXAm',
	'FC游戏&http://t.cn/A6hHglhH',
	'网页视频下载&http://t.cn/A6hHkNHH',
	'小视频下载&http://t.cn/A6hHkaFH',
	'PC管家软件&http://t.cn/A6hHkMVq',
	'管理软件&http://t.cn/A6hHk5G8',
	'临时网盘&http://t.cn/AiFRhEFJ',
	'手机工具箱&http://t.cn/A6hHFwpy',
	'图片压缩网站&http://t.cn/AiFRP4Y6',
	'专用格式转换&http://t.cn/A6hHFSrR',
	'网课答案查询&http://t.cn/A6hHkwoX',
]
var urls = [
	'title&页面',
	'个人主页&https://bzxg-space.github.io/home',
	'颜色值转换&colorConvert.html',
	'网站集锦&https://bzxg-space.github.io/webs',
	'仿毒鸡汤&https://bzxg-space.github.io/duWords',
	'一言 - 分类版&https://bzxg-space.github.io/oneWords',
	'一个句子&https://bzxg-space.github.io/newWords',
	'一个壁纸&https://bzxg-space.github.io/imgs',
	'一个头像&https://bzxg-space.github.io/pics',
	'小书签&https://bzxg-space.github.io/bookmarklet',
	'短网址生成&https://bzxg-space.github.io/shortlink',
	'古诗词 - 分类版&https://bzxg-space.github.io/gushici',
	'随机音乐&https://bzxg-space.github.io/randomMusic',
];
var div = document.getElementsByTagName('div')[0];
div.innerHTML = sum(words, urls);

//拼接
function sum() {
	var str = '';
	for (var t = 0; t < arguments.length; t++) {
		var lists = [];
		var url = [];
		lists = arguments[t];
		for (var i = 0; i < lists.length; i++) {
			url = lists[i].split('&');
			if (url[0] == "title") {
				str += '<section><h4>' + url[1] + '</h4><hr noshade="noshade"/><nav>';
			} else {
				str += '<a href="' + url[1] + '" target="_bank">' + url[0] + '</a>' + '\n';
			}
		}
		str += '</nav></section>';
	}
	return str;
}
