import images from './imgPaths';
const desc = [
  '功能相对齐全的玄关收纳',
  '目前最中意的风格-简洁, 质感',
  '中意中式的韵味,但并不喜欢中式家具,厚重且不实用',
  '中式韵味',
  '简洁, 质感',
  '轮廓光源的运用-卫生间',
  '轮廓光源的运用-书架',
  '轮廓光,焦点光的运用-卧室',
];
const describe = images.map((item, index) => ({
  title: desc[index],
  path: item,
}));
export default {
  describe,
  pageTitle: '概述',
  keyWords: ['光', '声', '景', '安全'],
  listItems: [
    {
      items: [
        '阳光: 东西朝向',
        '环境反射光: 对面大楼',
        '轮廓光源',
        '环境光源',
        '焦点光源',
      ],
      title: '光',
    },
    {
      items: ['环境噪音: 装修, 车流, 人流, 商家活动', '客厅音箱系统'],
      title: '声',
    },
    {
      items: [],
      title: '色彩',
    },
    {
      items: ['江景', '老街'],
      title: '景',
    },
    {
      items: ['卧室窗户太矮', '阳台是以门的方式封闭的'],
      title: '安全',
    },
  ],
};
