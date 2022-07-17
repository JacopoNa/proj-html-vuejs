<template>
    <div>
        <InteractionsComponent/>
        <OffersComponent/>
    </div>
</template>

<script>
import InteractionsComponent from './InteractionsComponent.vue'
import OffersComponent from './OffersComponent.vue'

export default {
    name: 'MainComponent',
    components: {
        InteractionsComponent,
        OffersComponent
    }
}
</script>

<style lang="scss" scoped>

</style>