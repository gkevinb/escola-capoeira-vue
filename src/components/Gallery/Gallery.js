export default {
  name: "képgaléria-tab",
  data() {
    return {
      path: "http://escolacapoeira.hu/wp-content/uploads/",
      pictures: [
        {
          name: "Nagy felnott roda",
          src: "2016/06/922614_532300283494578_1639502079_o.jpg",
          active: true,
        },
        {
          name: "Bangela roda",
          src: "2021/09/IMG_2313-e1632082520942.jpg"
        },
        {
          name: "Tanitas roda",
          src: "2021/09/IMG_2312-e1632083246108.jpg",
        },
        {
          name: "Felnott roda",
          src: "2016/06/10532067_753405504717387_6205888581770783457_o.jpg",
        },
        {
          name: "Gyerek edzes",
          src: "2016/06/383829_259999234058019_2052477680_n.jpg",
        },
        {
          name: "Maculele",
          src: "2016/06/13217286_1105620336162567_3209557935015431054_o.jpg",
        },
        {
          name: "Roda",
          src: "2016/06/901185_532300576827882_1234696515_o.jpg",
        },
      ],
    };
  },
  created() {},
  methods: {
    addPath: function(src) {
      return this.path + src;
    },
  },
};
