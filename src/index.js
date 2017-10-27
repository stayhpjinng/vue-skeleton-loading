import SkeletonLoading from './components/skeletonLoading.vue';
import SquareSkeleton from './components/basic/squareSkeleton.vue';
import CircleSkeleton from './components/basic/circleSkeleton.vue';

function install(Vue) {
    if(install.installed) return;
    install.installed = true;
    Vue.component('SkeletonLoading', SkeletonLoading);
    Vue.component('SquareSkeleton', SquareSkeleton);
    Vue.component('CircleSkeleton', CircleSkeleton);
}

const VueSkeletonLoading = {
    install,
    SkeletonLoading,
    SquareSkeleton,
    CircleSkeleton

};

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(SkeletonLoading);
}


export default VueSkeletonLoading;