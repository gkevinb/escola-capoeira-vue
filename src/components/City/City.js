import Practice from '../Practice/Practice.vue'

export default {
    name: "city",
    props: {
        cityName: String,
        practices: Array
    },
    components: {
        'practice' : Practice
    },
    data() {
        return {
        };
    },
    created() {

    },
    methods: {

    }
};
