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
                        <user-details v-if="showUser"></user-details>

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
            showUser: false,
            selectedRow: {}
        };
    },
    methods: {
        handleUserDelete() {
           // console.log("user confirmed to delete");
           // console.log(this.selectedRow);
            this.$refs.users_table.DoDeleteUser(this.selectedRow.id);
            this.selectedRow = {}; //do this after delete to reset the selected user
        },
        deleteUser(row) {
            this.userdelete = !this.userdelete;
              this.selectedRow = row;
           // console.log('deleteUser,row');
          //  console.log(row);
            // alert(row);
            // console.log('delete');
        },
        details(row) {
            this.selectedRow = row;
            //console.log('deleteUser,row');
           // console.log(row);
            //this.showUser = !this.showUser;
        }
    }
};
</script>
