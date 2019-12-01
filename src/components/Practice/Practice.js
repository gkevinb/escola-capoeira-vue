export default {
    name: "practice",
    props: {
        practice: Object
    },
    data() {
        return {};
    },
    created() {

    },
    methods: {
        stripHTTP: function () {
            return this.practice.websiteLink.slice(7, this.practice.websiteLink.length - 1)
        },
        redirectFacebook: function () {
            setTimeout(function () {
                window.location.assign(this.practice.facebookLink)
            }.bind(this), 200);
            window.location.assign('fb://profile/' + this.practice.facebookId)
        }
    }
};