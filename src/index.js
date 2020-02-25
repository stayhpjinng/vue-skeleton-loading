import SkeletonLoading from './components/skeletonLoading.vue';
import SquareSkeleton from './components/basic/squareSkeleton.vue';
import CircleSkeleton from './components/basic/circleSkeleton.vue';
import Column from './components/layout/column.vue';
import Row from './components/layout/row.vue';

function install(Vue) {
    if(install.installed) return;
    install.installed = true;
    Vue.component('skeleton-loading', SkeletonLoading);
    Vue.component('skeleton-square', SquareSkeleton);
    Vue.component('skeleton-circle', CircleSkeleton);
    Vue.component('skeleton-column', Column);
    Vue.component('skeleton-row', Row);
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

