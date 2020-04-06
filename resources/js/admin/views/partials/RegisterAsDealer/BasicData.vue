<template>
    <div>
        <div class="row">
            <div class="col">
                <label> Shop Name</label>
                <div>
                    <input type="text" />
                </div>
                <div class="col">
                    <label> Country</label>
                    <div>
                        <select v-model="countryId" @change="GetCities">
                            <option
                                v-for="country in countries"
                                :key="country.id"
                                :value="country.id"
                                >{{ country.title }}</option
                            >
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label> City</label>
                <div>
                    <select v-model="cityId">
                        <option
                            v-for="city in countryCities"
                            :key="city.id"
                            :value="city.id"
                            >{{ city.name }}</option
                        >
                    </select>
                </div>
                <div class="col">
                    <label>Commercial Registration No</label>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="">Mobile Phone</label>
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="">Type of activity</label>
                <div>
                    checkbox
                </div>
            </div>
            <div class="col">
                <label for="">service type</label>
                <div>
                    <input type="text" placeholder="choose activity type" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button>Continue</button>
            </div>
        </div>
        <div>
            <p>Do you have an Acount Login from <span>Here</span></p>
        </div>
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
            countryCities: []
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
                console.log(response);
                this.$set(this, "cities", response.data.data);
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
        }
    }
};
</script>

<style></style>
