<template>
    <div>
        <div
            v-show="show"
            class="swal2-container swal2-center swal2-shown"
            style="overflow-y: auto;"
        >
            <div
                aria-labelledby="swal2-title"
                aria-describedby="swal2-content"
                class="swal2-popup swal2-modal swal2-noanimation"
                tabindex="-1"
                role="dialog"
                aria-live="assertive"
                aria-modal="true"
                style="width: 400px; padding: 2.5rem; display: flex;"
            >
                <div class="swal2-header">
                    <ul class="swal2-progresssteps" style="display: none;"></ul>
                    <div class="swal2-icon swal2-error" style="display: none;">
                        <span class="swal2-x-mark"
                            ><span class="swal2-x-mark-line-left"></span
                            ><span class="swal2-x-mark-line-right"></span
                        ></span>
                    </div>
                    <div
                        class="swal2-icon swal2-question"
                        style="display: none;"
                    >
                        <span class="swal2-icon-text">?</span>
                    </div>
                    <div
                        class="swal2-icon swal2-warning"
                        style="display: none;"
                    >
                        <span class="swal2-icon-text">!</span>
                    </div>
                    <div class="swal2-icon swal2-info" style="display: none;">
                        <span class="swal2-icon-text">i</span>
                    </div>
                    <div
                        class="swal2-icon swal2-success"
                        style="display: none;"
                    >
                        <div
                            class="swal2-success-circular-line-left"
                            style="background-color: rgb(255, 255, 255);"
                        ></div>
                        <span class="swal2-success-line-tip"></span>
                        <span class="swal2-success-line-long"></span>
                        <div class="swal2-success-ring"></div>
                        <div
                            class="swal2-success-fix"
                            style="background-color: rgb(255, 255, 255);"
                        ></div>
                        <div
                            class="swal2-success-circular-line-right"
                            style="background-color: rgb(255, 255, 255);"
                        ></div>
                    </div>
                    <img
                        class="swal2-image"
                        :src="users.avatar"
                        alt="Custom image"
                        width="400"
                        height="200"
                        style="display: flex;"
                    />
                    <!-- <div>
                    {{users.avatar}}
                </div> -->
                    <h4
                        class="swal2-title"
                        id="swal2-title"
                        style="display: flex;"
                    >
                        ID : {{ users.id }}
                    </h4>
                    <!-- <label > ID : </label>
                    <input type="text" v-bind:row="row"> -->
                    <h4
                        class="swal2-title"
                        id="swal2-title"
                        style="display: flex;"
                    >
                        Email: {{ users.email }}
                    </h4>
                    <h4
                        class="swal2-title"
                        id="swal2-title"
                        style="display: flex;"
                    >
                        FirstName: {{ users.first_name }}
                    </h4>
                    <h4
                        class="swal2-title"
                        id="swal2-title"
                        style="display: flex;"
                    >
                        LastName: {{ users.last_name }}
                    </h4>
                    <button
                        type="button"
                        class="swal2-close"
                        style="display: none;"
                    >
                        ×
                    </button>
                </div>
                <div class="swal2-content">
                    <input class="swal2-input" style="display: none;" /><input
                        type="file"
                        class="swal2-file"
                        style="display: none;"
                    />
                    <div class="swal2-range" style="display: none;">
                        <input type="range" /><output></output>
                    </div>
                    <select
                        class="swal2-select"
                        style="display: none;"
                    ></select>
                    <div class="swal2-radio" style="display: none;"></div>
                    <label
                        for="swal2-checkbox"
                        class="swal2-checkbox"
                        style="display: none;"
                        ><input type="checkbox"/><span
                            class="swal2-label"
                        ></span></label
                    ><textarea
                        class="swal2-textarea"
                        style="display: none;"
                    ></textarea>
                    <div
                        class="swal2-validationerror"
                        id="swal2-validationerror"
                        style="display: none;"
                    ></div>
                </div>
                <div class="swal2-actions" style="display: flex;">
                    <button
                        type="button"
                        class="swal2-confirm btn btn-success m-btn m-btn--custom"
                        aria-label=""
                        @click="hideUser"
                    >
                        OK</button
                    ><button
                        type="button"
                        class="swal2-cancel btn btn-secondary m-btn m-btn--custom"
                        aria-label=""
                        style="display: none;"
                    >
                        Cancel
                    </button>
                </div>
                <div class="swal2-footer" style="display: none;"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    // props: ["users"],
    data() {
        return {
            image: "",
            show: false,
            users: []
            // image1:{users}
        };
    },
    methods: {},
    mounted() {
      //  console.log("test mounted for user details component");
        //mounted works when this component is rendered (compiled) [shown or not]
        //حتي لو كانت الكومبونن مخفيه رح يجي هون
        //لكن احنا بدنا نجيب التفاصيل لما احنا بدنا
    },
    methods: {
        hideUser() {
            this.show = !this.show;
        },
        getUserDataFromAPI(id) {
            let self = this;
            this.image = "";
            this.show = true;
            axios
                .get("https://reqres.in/api/users/" + id)
                .then(response => {
                    self.users = response.data.data;
                    console.log("Data", response.data.data);
                    // this.image = 'data:image/jpg;base64,'.concat(this.image.concat(users))
                    users.avatar = "<img src =" + users.avatar + " >";
                    // image=users.avatar;
                })
                .catch(error => console.log(error));
        }
    }
};
</script>

<style></style>
