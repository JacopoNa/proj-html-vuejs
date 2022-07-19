<template>
    <div>
        <InteractionsComponent/>
        <OffersComponent/>
        <PlaylistsComponent/>
        <SubscribeComponent/>
        <TrainingComponent/>
        <ArticlesComponent/>
        <JumboComponent/>
    </div>
</template>

<script>
import InteractionsComponent from './InteractionsComponent.vue'
import OffersComponent from './OffersComponent.vue'
import PlaylistsComponent from './PlaylistsComponent.vue'
import SubscribeComponent from './SubscribeComponent.vue'
import TrainingComponent from './TrainingComponent.vue'
import ArticlesComponent from './ArticlesComponent.vue'
import JumboComponent from './JumboComponent.vue'


export default {
    name: 'MainComponent',
    components: {
        InteractionsComponent,
        OffersComponent,
        PlaylistsComponent,
        SubscribeComponent,
        TrainingComponent,
        ArticlesComponent,
        JumboComponent
    }
}
</script>

<style lang="scss" scoped>

</style>