export default {
    name: "nav-menu",
    props: {
        tabs: Object
    },
    data() {
        return {
            currentTab: 'KEZDŐLAP' // Home is default tab
        }
    },
    methods: {
        setCurrentTab: function (tab, subTabs = []) {
            if (subTabs.length == 0) {
                this.currentTab = tab;
                this.$emit('current-tab', this.currentTab);
            }
        }
    }
};
