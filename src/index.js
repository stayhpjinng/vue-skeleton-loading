import SkeletonLoading from './components/skeletonLoading.vue';

function install(Vue) {
    if(install.installed) return;
    install.installed = true;
    Vue.component('SkeletonLoading', SkeletonLoading);
}

const VueSkeletonLoading = {
    install,
    SkeletonLoading
};

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(SkeletonLoading);
}


export default VueSkeletonLoading;