import NavMenu from '../components/NavMenu/NavMenu.vue'
import Kezdolap from '../components/Kezdolap/Kezdolap.vue'
import Edzesek from '../components/Edzesek/Edzesek.vue'
import English from '../components/English/English.vue'
import Rolunk from '../components/Rolunk/Rolunk.vue'
import Kapcsolat from '../components/Kapcsolat/Kapcsolat.vue'

import axios from 'axios';

export default {
    name: "app",
    components: {
        'nav-menu': NavMenu,
        'kezdőlap-tab': Kezdolap,
        'edzések-tab': Edzesek,
        'english-tab': English,
        'rolúnk-tab': Rolunk,
        'kapcsolat-tab': Kapcsolat
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
                    component: "EDZÉSEK",
                    request: {
                        method: "GET",
                        routeEndPoint: "http://escolacapoeira.hu/",
                        path: "wp-json/wp/v2/pages/24"
                    }
                },
                {
                    component: "ENGLISH",
                    request: {
                        method: "GET",
                        routeEndPoint: "http://escolacapoeira.hu/",
                        path: "wp-json/wp/v2/pages/197"
                    }
                },
                {
                    component: "ROLÚNK",
                    request: {
                        method: "GET",
                        routeEndPoint: "http://escolacapoeira.hu/",
                        path: "wp-json/wp/v2/pages/6"
                    }
                },
                // {
                //     component: "KAPCSOLAT",
                //     request: {
                //         method: "GET",
                //         routeEndPoint: "http://escolacapoeira.hu/",
                //         path: "wp-json/wp/v2/pages/13"
                //     }
                // },
            ],
            inputData: {
                Kezdolap: null,
                EDZÉSEK: null,
                English: null,
                Rolunk: null,
                Kapcsolat: null
            }
        };
    },
    created() {
        /* Perform all API calls to get data needed to populate all content for each component properly */
        for (let api of this.apis) {
            console.log("hel")
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
                    console.log(response.data.content)
                    this.inputData[component] = response.data.content;
                });
        },

    }
};
