export default {
    name: "képgaléria-tab",
    data() {
        return {
            path: 'http://escolacapoeira.hu/wp-content/uploads/',
            pictures: [
                {
                    name: 'Nagy felnott roda',
                    src: '2016/06/922614_532300283494578_1639502079_o.jpg',
                    active: true
                },
                {
                    name: 'Felnott roda',
                    src: '2016/06/10532067_753405504717387_6205888581770783457_o.jpg',
                },
                {
                    name: 'Gyerek edzes',
                    src: '2016/06/383829_259999234058019_2052477680_n.jpg',
                },
                {
                    name: 'Maculele',
                    src: '2016/06/13217286_1105620336162567_3209557935015431054_o.jpg'
                },
                {
                    name: 'Roda',
                    src: '2016/06/901185_532300576827882_1234696515_o.jpg'
                },
                {
                    name: 'Felnot edzes',
                    src: '2016/06/13173852_1104597956264805_5632934826630246073_n.jpg'
                },
                // {
                //     name: 'Csoport kep',
                //     src: '2020/02/57387434_2256266271097962_1188886456936955904_o.jpg'
                // }
            ]
        };
    },
    created() {

    },
    methods: {
        addPath: function(src) {
            return this.path + src;
        }
    }
};
