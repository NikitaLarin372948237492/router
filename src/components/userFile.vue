<!-- <template>
    <section class="user">
        <h1>{{ item.name }}</h1>
        <div class="user-details">
            <img :src="'/images/${ user.src}'" :alt="item.name">
            <p>{{ item.description }}</p>
        </div>
    </section>
</template>
<script>
import clothes from '@/clothes.json'
export default {
    computed: {
        userId() {
            return parseInt(this.$route.params.store.prodId)

        },
        user() {
            return clothes.prodId.find(user => user.prodid === this.userId)
        }
    }
}
</script>
<style>

</style> -->