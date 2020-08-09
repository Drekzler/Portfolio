<template>
    <div id="background_manipulation">
    <v-container>
        <v-row>
            <v-col md="7" class="go_back">
                <v-row>
                    <v-col md="12">
                        <h1>Jón Heiðar Sigmundsson</h1>    
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12">
                        <h2>Developer</h2> 
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="8">
                        <p class="header_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="offset" md="2" sm="2">
                        <v-btn> View Portfolio </v-btn>
                    </v-col>
                    <v-col md="1" sm="2"> 
                        <v-btn color="primary"> Download Resume </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="push_forward">
                <img  src="../../assets/pictures/nobackgroundbaby.png"/>
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

    #background_manipulation {
        position: relative;
        height: 100vh;
        width: 100%;
        background: #F0F8FF;
        margin-top: 0px;
    }

    #background_manipulation:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100% 102%;
        width: 67%;
        height: 129%;
        background-color: white;
        right: -257px;
        top: -96px;
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
    .go_back{
        z-index: 2;
    }
    .push_forward{
        z-index: 3;
    }
    img{
            width: 79%;
    }

</style>

