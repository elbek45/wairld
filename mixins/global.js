import { mapGetters, mapActions } from 'vuex'
import { 
    cloneObject as utilsCloneObject, 
    orderBy as utilsOrderBy 
} from '@/utils/index'
export default {
    data() {
        return {
            snKeys: [
                "artstation",
                "facebook",
                "instagram",
                "linkedin",
                "twitter",
                "discord",
                "telegram",
            ]
        }
    },
    computed: {
        ...mapGetters({
            isAuth: 'auth/IS_AUTH',
            currentUser: 'auth/USER',
            loadRunningGetter: 'loader/REQUEST_RUNNING',
            incompleteInvoice: 'invoices/INCOMPLETE_INVOICE',
            sidebarPostion: 'app/SIDEBAR_POSITION',
            mobNavShow: 'app/MOB_NAV_SHOW',
        }),
        loadRunning() {
            return this.loadRunningGetter < 0 ? 0 : this.loadRunningGetter;
        },
        currentUserRole() {
            return this.currentUser?this.currentUser.role:null;
        },
        currentProfile() {
            return this.currentUser?this.currentUser.profile:null;
        },
        isAdmin() {
            return this.currentUserRole == 'admin';
        },
        isMember() {
            return this.currentUserRole == 'member';
        },
        isPaid() {
            return this.currentUser ? this.currentUser['is_active'] : false
        },
        isDev() {
            return process.env.NODE_ENV == "development";
        },
        isDarkTheme(){
            var theme = this.$storage.getItem('theme');
            return theme&&theme=='dark';
        }
    },
    methods: {
        ...mapActions({
            setMobNavShow: 'app/setMobNavShow'
        }),
        cloneObject(object) {
            return utilsCloneObject(object);
        },
        openFile(base64, filename) {
            let link = document.createElement("a");
            link.href = base64;
            link.download = filename;
            // link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        fullPath(path) {
            return process.env.VUE_APP_PUBLIC + path;
        },
        changeQuery(key, value) {
            let query = {... {}, ...this.$route.query };
            if (value) {
                if (query[key] != value) {
                    query[key] = value;
                    this.$router.push({ name: this.$route.name, params: this.$route.params, query });
                }
            } else {
                if (query[key]) {
                    delete query[key];
                    this.$router.push({ name: this.$route.name, params: this.$route.params, query });
                }
            }
        },
        changeQueries(queries){
            let query = {...{}, ...this.$route.query};
            Object.keys(queries).forEach(key => {
                var value = queries[key];
                if(value){
                    if(query[key] != value){
                        query[key] = value;
                    }
                }else{
                    if (query[key]) {
                        delete query[key];
                    }
                }
            })
            this.$router.push({name: this.$route.name, params: this.$route.params, query });
        },
        even(x){
            if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
        },
        getPercentage(totalCount, count){
            if (isNaN(totalCount) || isNaN(count) || !count || !totalCount) {
              return 0
            }
            let result = ((count / totalCount) * 100)
            return Math.round(result * 100) / 100
        },
        getShortDesc(html){
            var text = html.replace(/(<([^>]+)>)/ig, "");
            if(text.length > 60){
                return text.substring(0, 60)+'...';
            }
            return text;
        },
        isEven(number){
            return Number(number) % 2 == 0;
        },
        timeToDate(time){
            return (new Date(time*1000)).toString();
        }
    }
};