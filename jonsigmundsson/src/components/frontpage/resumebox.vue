<template>
    <div class="background_manipulation">
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <h1>Jón Heiðar Sigmundsson</h1>    
                </v-row>
                <v-row>
                    <h2>Developer</h2> 
                </v-row>
                <v-row>
                    <v-col class="offset" md="1" sm="2">
                        <v-btn> View Portfolio </v-btn>
                    </v-col>
                    <v-col md="1" sm="2"> 
                        <v-btn color="primary"> Download Resume </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <img :src="fullstackPic"/>
            </v-col>
            
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fullstackPic: require('../../assets/pictures/full_stack.jpg')
        };
    }
}
</script>


<style lang="scss" scoped>
    .background_manipulation{
        height: 60vh !important;
        background-color:#f8fcfd;
        width: 100%;
        margin-top: -24px !important;
        padding-left: 5% !important
    }
    h1{
        font-size: 56px;
    }
    .v-btn{
        margin-right: 10px !important
    }
    .offset{
        margin-right: 10px;
        padding-left: 0px;
    }
    h2{
        letter-spacing: 8px;
        color: gray;
    }
</style>

