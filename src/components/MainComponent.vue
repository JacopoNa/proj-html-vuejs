<template>
    <div>
        <InteractionsComponent/>
        <OffersComponent/>
        <PlaylistsComponent/>
    </div>
</template>

<script>
import InteractionsComponent from './InteractionsComponent.vue'
import OffersComponent from './OffersComponent.vue'
import PlaylistsComponent from './PlaylistsComponent.vue'

export default {
    name: 'MainComponent',
    components: {
        InteractionsComponent,
        OffersComponent,
        PlaylistsComponent
    }
}
</script>

<style lang="scss" scoped>

</style>