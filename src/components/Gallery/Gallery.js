export default {
  name: "képgaléria-tab",
  data() {
    return {
      path: "/img/",
      pictures: [
        {
          name: "Nagy felnott roda",
          src: "922614_532300283494578_1639502079_o.jpg",
          active: true,
        },
        {
          name: "Felnott roda",
          src: "10532067_753405504717387_6205888581770783457_o.jpg",
        },
        {
          name: "Gyerek edzes",
          src: "383829_259999234058019_2052477680_n.jpg",
        },
        {
          name: "Maculele",
          src: "13217286_1105620336162567_3209557935015431054_o.jpg",
        },
        {
          name: "Roda",
          src: "901185_532300576827882_1234696515_o.jpg",
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
