<template>
    <li>
        <h2>{{ name }}{{ isFavorite ? '(좋아함)' : ''}}</h2>
        <button @click="toggleFavorite">Favorite</button>
        <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} Detail</button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone</strong> {{ phoneNumber }}</li>
            <li><strong>Email</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>
<script>
export default {
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite',
    // ],
    props:{
        id:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            validator: function(value){
                return value === '1' || value === '0'
            }
        },
    },
    emits: ['toggle-favorite'],
    // emit:{
    //     'toggle-favorite': function(id){
    //         if(id){
    //             return true
    //         }else{
    //             console.warn('id 없다')
    //         }
    //     }
    // },  
    data(){
        return{
            detailAreVisible:false,
        }
    },
    methods: {
        toggleDetail(){
            this.detailAreVisible = !this.detailAreVisible
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        },
    }
}
</script>