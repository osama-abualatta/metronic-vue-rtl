<template>
    <div>
        <!-- begin::Page loader -->
        <!-- <router-link v-if="authenticated" to="/login"  @logoutHandle="logoutHandle" replace>Logout</router-link> -->

        <loader></loader>

        <!-- end::Page Loader -->

        <!-- begin:: Page -->
        <div class="m-grid m-grid--hor m-grid--root m-page">
            <!-- begin::Header -->
            <app-header></app-header>

            <!-- end::Header -->

            <!-- begin::Body -->
            <div
                class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-page__container m-body"
            >
                <div class="m-grid__item m-grid__item--fluid m-wrapper">
                    <!-- BEGIN: Subheader -->
                    <!-- <sub-header></sub-header> -->

                    <!-- END: Subheader -->
                    <!-- begin content-->
                    <div class="m-content">
                        <delete-user
                            @onUserDelete="handleUserDelete"
                            v-if="userdelete"
                        ></delete-user>
                        <user-details
                            v-show="show"
                            ref="details_comp"
                        ></user-details>

 <!-- ref="details_comp"  اشرنا علي الكمبوننت باسم او بالعربي اعطيناها اسم مميز--->
                        <router-view />
                    </div>

                    <!-- end content-->
                </div>
            </div>

            <!-- end::Body -->

            <!-- begin::Footer -->
            <ffooter></ffooter>

            <!-- end::Footer -->
        </div>

        <!-- end:: Page -->

        <!-- begin::Quick Sidebar -->
        <sidebar></sidebar>

        <!-- end::Quick Sidebar -->

        <!-- begin::Scroll Top -->
        <scrolltop></scrolltop>
        <!-- end::Scroll Top -->

        <!-- begin::Quick Nav -->
        <qnav></qnav>
        <!-- begin::Quick Nav -->

        <!-- <router-view @authenticated="setAuthenticated" /> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            userdelete: false,
            show: false,
            selectedRow: {}
        };
    },
    mounted() {
        let self = this;
        this.$root.$on("deleteUser", row => {
            self.userdelete = !self.userdelete;
            self.selectedRow = row;
            console.log("deleteUser,row");
            //  console.log(row);
            // alert(row);
            // console.log('delete');
        });

        this.$root.$on("serverDeleteUser", function() {
            self.userdelete = false;
        });

        this.$root.$on("details", row => {//listen to the event "details" $n is for listening to the event
            console.log("details,row");
            //استقبلنا بيانات الحدث
            console.log(row);
            self.show = true;
            //self.selectedRow = row;
            //بما انو الكومبوننت عندي يعني بقدر اضيفها ع ال
            //refs
            this.$refs.details_comp.getUserDataFromAPI(row.id);
            // this.$refs.nameOfTheRef
            //nameOfTheRef = اسم ال ref
            //بتقدر تصل لكل حاجه داخلها بما في ذلك
            //methods or data
            //self.showUser = !thselfis.showUser;
        });
    },
    methods: {
        handleUserDelete() {
            console.log("user confirmed to delete");
            console.log(this.selectedRow);
            this.$root.$emit("confirmDeleteUser", this.selectedRow);
            this.selectedRow = {}; //do this after delete to reset the selected user
        }
    }
};
</script>
