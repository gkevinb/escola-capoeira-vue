export default {
    name: "footer-comp",
    data() {
        return {
        };
    },
    created() {

    },
    methods: {
        redirectFacebook: function () {
            setTimeout(function () {
                window.location.assign('https://www.facebook.com/escolacapoeirahu/')
            }, 200);
            window.location.assign('fb://profile/135132893211321')
        }
    }
};
