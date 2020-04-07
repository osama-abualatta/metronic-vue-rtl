<template>
    <div> <form>
        <div class="row ">
            <!-- <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div> -->
            <div class="col form-group">
                <label for="ShopInput"> Shop Name</label>

                    <input type="text" class="form-control" id="ShopInput" />
            </div>
                <div class="col form-group">
                    <label> Country</label>

                        <select v-model="countryId" @change="GetCities" class="form-control">
                            <option
                                v-for="country in countries"
                                :key="country.id"
                                :value="country.id"
                                >{{ country.title }}</option
                            >
                        </select>

                </div>

        </div>
        <div class="row">
            <div class="col form-group">
                <label> City</label>
                <div>
                    <select v-model="cityId" class="form-control">
                        <option
                            v-for="city in countryCities"
                            :key="city.id"
                            :value="city.id"
                            >{{ city.name }}</option
                        >
                    </select>
                </div>
            </div>
                <div class="col form-group">
                    <label>Commercial Registration No</label>
                    <div>

                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>

        <div class="row">
            <div class="col form-group">
                <label for="">Mobile Phone</label>
                <div>
                    <input type="text" class="form-control" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col form-group">
                <label for="">Type of activity</label>
                <div>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" v-model="activityType" @change="radioSelect">
  <label class="form-check-label" for="inlineRadio2">Products</label>

</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1" v-model="activityType" @change="radioSelect">
  <label class="form-check-label" for="inlineRadio2">services</label>
</div>
                </div>
            </div>
            <div class="col form-group">
                <label for="">service type</label>
                <div>
                <select class="form-control">
                        <option
                        v-for="activity in selectActivity "
                        :key="activity.id"
                        :value="activity.id"
                        >{{activity.name}}</option >
                    </select>
                    <!--ارسم الشجره هنا بدل هادي ال select لانه الجسيون اللي جاييك شكل تبع بلقن الشجره!!-->
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <button class="btn btn-primary" @click="continueRegister">Continue</button>
            </div>
        </div>
        <div>
            <p>Do you have an Acount Login from <span class="spanColor">Here</span></p>
        </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            countryId: 0,
            cityId: 0,
            countries: [],
            cities: [],
            countryCities: [],
            activityType:0,
            activities:[],
            selectActivity:[],


        };
    },
    mounted() {
        axios
            .get("/country.json")
            .then(response => {
                console.log(response);
                this.$set(this, "countries", response.data.resources);
            })
            .catch(function(error) {
                console.log(error);
            });

        axios
            .get("/city.json")
            .then(response => {
                console.log(response.data.data);
                this.$set(this, "cities", response.data.data);
            })
            .catch(function(error) {
                console.log(error);
            });
                    axios
            .get("/activity-type-category.json")
            .then(response => {
                this.$set(this, "activities", response.data.data.children);
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    methods: {
        GetCities() {
            this.$set(
                this,
                "countryCities",
                this.cities.filter(x => x.country_id == this.countryId)
            );
        },
        radioSelect(){
        console.log(this.activityType);
               this.$set(this,"selectActivity",this.activities[this.activityType].children);
        },
        continueRegister(){
            this.$router.push({ path: '/dashboard/RegisterDealer/accountData' })
        }
    }
};
</script>

<style>
.spanColor{
    color:red;
    cursor: pointer;
}
</style>
