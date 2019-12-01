import NavMenu from '../components/NavMenu/NavMenu.vue'
import Kezdolap from '../components/Kezdolap/Kezdolap.vue'
import Edzesek from '../components/Edzesek/Edzesek.vue'
import English from '../components/English/English.vue'
import Rolunk from '../components/Rolunk/Rolunk.vue'
import Kapcsolat from '../components/Kapcsolat/Kapcsolat.vue'
import Footer from '../components/Footer/Footer.vue'

import axios from 'axios';

export default {
    name: "app",
    components: {
        'nav-menu': NavMenu,
        'kezdőlap-tab': Kezdolap,
        'edzések-tab': Edzesek,
        'english-tab': English,
        'rolúnk-tab': Rolunk,
        'kapcsolat-tab': Kapcsolat,
        'footer-comp': Footer
    },
    data() {
        return {
            currentTab: "KEZDŐLAP",
            tabs: {
                KEZDŐLAP: [],
                EDZÉSEK: [],
                ENGLISH: [],
                ROLÚNK: [],
                KAPCSOLAT: []
            },
            apis: [
                {
                    component: "ENGLISH",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://escolacapoeira.hu/",
                        path: "wp-json/wp/v2/pages/197"
                    }
                },
                {
                    component: "ROLÚNK",
                    request: {
                        method: "GET",
                        routeEndPoint: "https://escolacapoeira.hu/",
                        path: "wp-json/wp/v2/pages/6"
                    }
                },
            ],
            inputData: {
                ENGLISH: null,
                ROLÚNK: null,
            }
        };
    },
    created() {
        /* Perform all API calls to get data needed to populate all content for each component properly */
        for (let api of this.apis) {
            this.apiCall(api.component, api.request);
        }
    },
    computed: {
        /*
            Get identifier for current tab.
            Replaces space with dash, makes all letters lowercase and adds "-tab".
            Input: Chinese Flashcards
            Output: chinese-flashcards-tab
        */
        getCurrentTab: function () {
            return this.currentTab.replace(' ', '-').toLowerCase() + "-tab";
        }
    },
    methods: {
        apiCall: function (component, request) {
            let API = axios.create({
                baseURL: request.routeEndPoint,
            })
            /* Note: GET is hardcoded, for know, since it is the only type of request made */
            API.get(request.path)
                .then(response => {
                    this.inputData[component] = response.data.content;
                });
        },

    }
};
